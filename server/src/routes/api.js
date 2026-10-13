import {Router} from 'express';
import {z} from 'zod';
import {prisma} from '../config/prisma.js';
import {auth} from '../middleware/auth.js';
import {statusForAmounts,leaseStatus} from '../services/statusService.js';
import {generateContract} from '../services/pdfContractService.js';
import {generatePaymentDocument} from '../services/paymentDocumentService.js';
import {sendEmail} from '../services/emailService.js';
const router=Router();router.use(auth);
const models={tenants:prisma.tenant,units:prisma.unit,leases:prisma.lease,payments:prisma.rentPayment,bills:prisma.bill,contracts:prisma.contract};
const schemas={tenants:z.object({fullName:z.string().min(2),phone:z.string().min(5),email:z.union([z.string().email(),z.literal('')]).optional(),idNumber:z.string().optional(),emergencyContact:z.string().optional(),emergencyPhone:z.string().optional(),notes:z.string().optional()}),units:z.object({name:z.string().min(1),propertyName:z.string().min(1),address:z.string().optional(),description:z.string().optional()}),leases:z.object({tenantId:z.string().min(1),unitId:z.string().min(1),startDate:z.coerce.date(),endDate:z.coerce.date(),rentAmount:z.coerce.number().positive(),paymentFrequency:z.preprocess(v=>v===''||v===undefined?'monthly':v,z.enum(['monthly','weekly','quarterly'])),depositAmount:z.preprocess(v=>v===''||v===undefined?0:v,z.coerce.number().min(0)).default(0),notes:z.string().optional()}),payments:z.object({leaseId:z.string(),periodStart:z.coerce.date(),periodEnd:z.coerce.date(),amountDue:z.coerce.number().positive(),amountPaid:z.coerce.number().min(0).default(0),paymentDate:z.coerce.date().optional(),reminderDate:z.coerce.date().optional(),paymentMethod:z.string().optional(),reference:z.string().optional(),notes:z.string().optional()}),bills:z.object({leaseId:z.string(),billType:z.enum(['water','electricity','other']),description:z.string().min(1),amountDue:z.coerce.number().positive(),amountPaid:z.coerce.number().min(0).default(0),dueDate:z.coerce.date(),paymentDate:z.coerce.date().optional()})};
const includes={contracts:{lease:{include:{tenant:true,unit:true}}},leases:{tenant:true,unit:true},payments:{lease:{include:{tenant:true,unit:true}},receipts:{orderBy:{paymentDate:'asc'}}},bills:{lease:{include:{tenant:true,unit:true}}}};
function clean(s,b){let x=s.parse(b);for(let k of ['email','idNumber','emergencyContact','emergencyPhone','notes','address','description','paymentMethod','reference'])if(x[k]==='')delete x[k];return x}
async function generateLeaseDocumentsAndNotify(leaseId,userId,language){
 try{
  const [full,owner]=await Promise.all([
   prisma.lease.findUnique({where:{id:leaseId},include:{tenant:true,unit:true}}),
   prisma.user.findUnique({where:{id:userId}})
  ]);
  if(!full||!owner)return;
  const docs=[];
  for(const docLanguage of ['en','sw']){
   const filePath=await generateContract({...full,owner},docLanguage);
   await prisma.contract.updateMany({where:{leaseId,generatedBy:userId,language:docLanguage},data:{filePath}});
   docs.push({language:docLanguage,filePath});
  }
  const sw=language==='sw',selected=docs.find(doc=>doc.language===(sw?'sw':'en'));
  const ownerSubject=sw?'Mkataba mpya wa upangaji umetengenezwa':'New lease agreement created';
  const ownerHtml=sw
   ?`<p>Mkataba wa upangaji umetengenezwa kwa ${full.tenant.fullName} katika ${full.unit.propertyName} · ${full.unit.name}.</p><p>Kipindi cha mkataba: ${new Date(full.startDate).toLocaleDateString('sw-TZ')} hadi ${new Date(full.endDate).toLocaleDateString('sw-TZ')}. Kodi: TZS ${Number(full.rentAmount).toLocaleString('sw-TZ')}.</p><p>Nakala za mkataba zimeambatishwa.</p>`
   :`<p>A lease agreement was created for ${full.tenant.fullName} at ${full.unit.propertyName} · ${full.unit.name}.</p><p>Lease dates: ${new Date(full.startDate).toLocaleDateString('en-GB')} to ${new Date(full.endDate).toLocaleDateString('en-GB')}. Rent: TZS ${Number(full.rentAmount).toLocaleString('en-US')}.</p><p>English and Kiswahili copies are attached.</p>`;
  const tasks=[sendEmail({to:owner.email,subject:ownerSubject,html:ownerHtml,type:'lease-created',relatedId:leaseId,userId,route:'/leases?record='+leaseId,attachments:docs.map(doc=>({filename:`lease-agreement-${doc.language==='sw'?'kiswahili':'english'}.pdf`,path:doc.filePath}))})];
  if(full.tenant.email){
   const tenantSubject=sw?'Mkataba wako wa upangaji uko tayari':'Your rental agreement is ready';
   const tenantHtml=sw?`<p>Habari ${full.tenant.fullName},</p><p>Nakala yako ya mkataba wa upangaji kwa ${full.unit.propertyName}, nyumba ${full.unit.name}, iko tayari. Tafadhali ipitie na uisaini.</p>`:`<p>Hello ${full.tenant.fullName},</p><p>Your rental agreement for ${full.unit.propertyName}, unit ${full.unit.name}, is ready to review and sign.</p>`;
   tasks.push(sendEmail({to:full.tenant.email,subject:tenantSubject,html:tenantHtml,type:'contract',relatedId:leaseId,userId,route:'/leases?record='+leaseId,attachments:[{filename:`rental-agreement-${sw?'kiswahili':'english'}.pdf`,path:selected.filePath}]}));
  }
  await Promise.all(tasks);
 }catch(error){console.error('[lease documents/email]',leaseId,error)}
}
async function leaseHasReceivedPayment(leaseId){
 const payments=await prisma.rentPayment.findMany({where:{leaseId},select:{amountPaid:true,receipts:{select:{amount:true}}}});
 return payments.some(payment=>Math.max(Number(payment.amountPaid),payment.receipts.reduce((total,receipt)=>total+Number(receipt.amount),0))>0);
}
async function notifyPaymentRecorded(paymentId,userId,language,kind='created',receiptAmount=0){
 try{
  const [payment,owner]=await Promise.all([
   prisma.rentPayment.findUnique({where:{id:paymentId},include:{...includes.payments,receipts:{orderBy:{paymentDate:'asc'}}}}),
   prisma.user.findUnique({where:{id:userId}})
  ]);
  if(!payment||!owner)return;
  const sw=language==='sw'||(!language&&owner.preferredLanguage==='sw');
  const received=Math.max(Number(payment.amountPaid),payment.receipts.reduce((total,receipt)=>total+Number(receipt.amount),0));
  const file=await generatePaymentDocument(payment,owner);
  const description=`${payment.lease.tenant.fullName}, ${payment.lease.unit.propertyName} - ${payment.lease.unit.name}`;
  const html=kind==='receipt'
   ?sw?`<p>Malipo ya TZS ${Number(receiptAmount).toLocaleString('sw-TZ')} yamehifadhiwa kwa ${description}.</p><p>Kipindi cha kodi: ${new Date(payment.periodStart).toLocaleDateString('sw-TZ')} hadi ${new Date(payment.periodEnd).toLocaleDateString('sw-TZ')}.</p><p>Jumla iliyopokelewa: TZS ${received.toLocaleString('sw-TZ')}.</p>`:`<p>A payment of TZS ${Number(receiptAmount).toLocaleString('en-US')} was recorded for ${description}.</p><p>Rent period: ${new Date(payment.periodStart).toLocaleDateString('en-GB')} to ${new Date(payment.periodEnd).toLocaleDateString('en-GB')}.</p><p>Total received: TZS ${received.toLocaleString('en-US')}.</p>`
   :sw?`<p>Rekodi ya malipo ya kodi imetengenezwa kwa ${description}.</p><p>Kiasi kinachodaiwa: TZS ${Number(payment.amountDue).toLocaleString('sw-TZ')}. Kiasi kilichopokelewa: TZS ${received.toLocaleString('sw-TZ')}.</p>`:`<p>A rent payment record was created for ${description}.</p><p>Amount due: TZS ${Number(payment.amountDue).toLocaleString('en-US')}. Amount received: TZS ${received.toLocaleString('en-US')}.</p>`;
  await sendEmail({to:owner.email,subject:kind==='receipt'?(sw?'Malipo ya kodi yamerekodiwa':'Rent payment recorded'):(sw?'Rekodi ya malipo ya kodi imetengenezwa':'Rent payment record created'),html,type:'payment-recorded',relatedId:payment.id,userId,route:'/payments?record='+payment.id,attachments:[{filename:'rent-payment-'+payment.id+'.pdf',path:file}]});
 }catch(error){console.error('[payment email]',paymentId,error)}
}
for(const[type,model]of Object.entries(models)){
 router.get('/'+type,async(req,res,next)=>{try{let items=await model.findMany({where:type==='contracts'?{generatedBy:req.user.sub}:undefined,include:type==='leases'?{...includes.leases,rentPayments:{select:{amountPaid:true,receipts:{select:{amount:true}}}}}:includes[type],orderBy:type==='leases'?{endDate:'asc'}:type==='contracts'?{generatedAt:'desc'}:{createdAt:'desc'}});if(type==='leases')items=items.map(({rentPayments,...x})=>({...x,status:leaseStatus(x.endDate,x.status),hasRecordedPayments:rentPayments.some(payment=>Math.max(Number(payment.amountPaid),payment.receipts.reduce((total,receipt)=>total+Number(receipt.amount),0))>0)}));if(type==='payments')items=items.map(x=>{const receiptTotal=x.receipts.reduce((n,r)=>n+Number(r.amount),0),amountPaid=Math.max(Number(x.amountPaid),receiptTotal);return {...x,amountPaid,status:statusForAmounts(x.amountDue,amountPaid,x.reminderDate||x.periodEnd)}});if(type==='bills')items=items.map(x=>({...x,status:statusForAmounts(x.amountDue,x.amountPaid,x.dueDate)}));res.json({items})}catch(e){next(e)}});
 if(type==='contracts')continue;
 if(type==='payments'){
  router.post('/payments/:id/receipts',async(req,res,next)=>{try{const body=z.object({amount:z.coerce.number().positive(),paymentDate:z.coerce.date().optional(),paymentMethod:z.string().optional(),reference:z.string().optional()}).parse(req.body),payment=await prisma.rentPayment.findUnique({where:{id:req.params.id},include:{receipts:true}});if(!payment)return res.status(404).json({error:'This rent record no longer exists. Refresh and try again.'});const receiptTotal=payment.receipts.reduce((n,r)=>n+Number(r.amount),0),prior=Math.max(Number(payment.amountPaid),receiptTotal);if(prior+body.amount>Number(payment.amountDue))return res.status(400).json({error:'This receipt is more than the remaining balance.'});const result=await prisma.$transaction(async tx=>{const receipt=await tx.paymentReceipt.create({data:{rentPaymentId:payment.id,...body}}),amountPaid=prior+body.amount,status=statusForAmounts(payment.amountDue,amountPaid,payment.reminderDate||payment.periodEnd);await tx.rentPayment.update({where:{id:payment.id},data:{amountPaid,status,paymentDate:body.paymentDate||new Date(),paymentMethod:body.paymentMethod,reference:body.reference}});return receipt});setImmediate(()=>{void notifyPaymentRecorded(payment.id,req.user.sub,req.get('x-app-language'),'receipt',body.amount)});return res.status(201).json(result)}catch(e){next(e)}});
 }
 router.post('/'+type,async(req,res,next)=>{try{let p=clean(schemas[type],req.body);if(type==='leases'){
  if(p.endDate<=p.startDate)return res.status(400).json({error:'Lease end date must be after its start date'});
  const occupied=await prisma.lease.findFirst({where:{unitId:p.unitId,status:'active',endDate:{gte:new Date()}}});
  if(occupied)return res.status(409).json({error:'This unit already has an active lease'});
  const [lease,owner]=await Promise.all([
   model.create({data:p,include:includes.leases}),
   prisma.user.findUnique({where:{id:req.user.sub},select:{id:true,email:true,preferredLanguage:true}})
  ]);
  if(!owner)return res.status(401).json({error:'Please sign in again and retry.'});
  const requestedLanguage=req.get('x-app-language');
  const language=requestedLanguage==='en'||requestedLanguage==='sw'?requestedLanguage:(owner.preferredLanguage==='sw'?'sw':'en');
  await prisma.contract.createMany({data:['en','sw'].map(docLanguage=>({leaseId:lease.id,filePath:'',language:docLanguage,generatedBy:req.user.sub}))});
  setImmediate(()=>{void generateLeaseDocumentsAndNotify(lease.id,req.user.sub,language)});
  return res.status(201).json(lease)
}
if(type==='payments'){let amountPaid=p.amountPaid;if(amountPaid<p.amountDue&&!p.reminderDate)return res.status(400).json({error:'Set a due date for the remaining rent balance.'});delete p.amountPaid;const {paymentDate,paymentMethod,reference}=p;p.status=statusForAmounts(p.amountDue,amountPaid,p.reminderDate||p.periodEnd);let item=await prisma.rentPayment.create({data:{...p,amountPaid,receipts:amountPaid>0?{create:{amount:amountPaid,paymentDate:paymentDate||new Date(),paymentMethod,reference}}:undefined},include:includes.payments});setImmediate(()=>{void notifyPaymentRecorded(item.id,req.user.sub,req.get('x-app-language'))});return res.status(201).json({...item,amountPaid,status:p.status})}if(type==='bills')p.status=statusForAmounts(p.amountDue,p.amountPaid,p.dueDate);res.status(201).json(await model.create({data:p}))}catch(e){next(e)}});
 router.put('/'+type+'/:id',async(req,res,next)=>{try{let current=await model.findUnique({where:{id:req.params.id}});if(!current)return res.status(404).json({error:'This record no longer exists. Refresh the list and try again.'});let p=clean(schemas[type],req.body);if(type==='leases'&&await leaseHasReceivedPayment(req.params.id))return res.status(409).json({error:'This lease has received payments and can no longer be edited.'});if(type==='leases'){if(p.endDate<=p.startDate)return res.status(400).json({error:'Lease end date must be after its start date'});p.status=leaseStatus(p.endDate)}if(type==='payments'){const receipts=await prisma.paymentReceipt.findMany({where:{rentPaymentId:req.params.id}}),received=Math.max(Number(current.amountPaid),receipts.reduce((n,r)=>n+Number(r.amount),0));if(p.amountDue<received)return res.status(400).json({error:'The amount due cannot be lower than what the tenant has already paid.'});delete p.amountPaid;delete p.paymentDate;delete p.paymentMethod;delete p.reference;if(p.amountDue>received&&!p.reminderDate)return res.status(400).json({error:'Set a due date for the remaining rent balance.'});p.status=statusForAmounts(p.amountDue,received,p.reminderDate||p.periodEnd)}if(type==='bills')p.status=statusForAmounts(p.amountDue,p.amountPaid,p.dueDate);res.json(await model.update({where:{id:req.params.id},data:p}))}catch(e){next(e)}});
 router.delete('/'+type+'/:id',async(req,res,next)=>{try{let current=await model.findUnique({where:{id:req.params.id}});if(!current)return res.status(404).json({error:'This record was already removed.'});if(type==='leases'&&await leaseHasReceivedPayment(req.params.id))return res.status(409).json({error:'This lease has received payments and can no longer be deleted.'});await model.delete({where:{id:req.params.id}});res.status(204).end()}catch(e){next(e)}})
}
router.get('/leases/:id/download',async(req,res,next)=>{try{const language=z.enum(['en','sw']).safeParse(req.query.language);if(!language.success)return res.status(400).json({error:'Choose English or Kiswahili before downloading.'});const contract=await prisma.contract.findFirst({where:{leaseId:req.params.id,generatedBy:req.user.sub,language:language.data}});if(!contract)return res.status(404).json({error:'The agreement could not be found for this lease. Refresh and try again.'});const owner=await prisma.user.findUnique({where:{id:req.user.sub}}),lease=await prisma.lease.findUnique({where:{id:req.params.id},include:{tenant:true,unit:true}});if(!lease)return res.status(404).json({error:'This lease no longer exists.'});const filePath=await generateContract({...lease,owner},language.data);await prisma.contract.update({where:{id:contract.id},data:{filePath}});res.download(filePath,`lease-agreement-${language.data==='sw'?'kiswahili':'english'}.pdf`)}catch(e){next(e)}});
router.get('/contracts/:id/download',async(req,res,next)=>{try{const c=await prisma.contract.findFirst({where:{id:req.params.id,generatedBy:req.user.sub}});if(!c)return res.status(404).json({error:'The agreement could not be found.'});res.redirect(307,`/api/leases/${c.leaseId}/download?language=${c.language}`)}catch(e){next(e)}});
router.get('/dashboard',async(req,res,next)=>{try{let[units,leases,tenants,payments,bills]=await Promise.all([prisma.unit.count(),prisma.lease.findMany({where:{status:'active'},include:{tenant:true,unit:true}}),prisma.tenant.count(),prisma.rentPayment.findMany({include:{lease:{include:{tenant:true,unit:true}},receipts:{orderBy:{paymentDate:'asc'}}},orderBy:{createdAt:'desc'}}),prisma.bill.findMany({include:{lease:{include:{tenant:true,unit:true}}}})]);payments=payments.map(p=>{const amountPaid=Math.max(Number(p.amountPaid),p.receipts.reduce((n,r)=>n+Number(r.amount),0));return {...p,amountPaid,status:statusForAmounts(p.amountDue,amountPaid,p.reminderDate||p.periodEnd)}});res.json({units,leases,tenants,payments,bills})}catch(e){next(e)}});
export default router;



