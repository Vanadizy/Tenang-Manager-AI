import {Router} from 'express';
import {access,readFile} from 'node:fs/promises';
import {z} from 'zod';
import {prisma} from '../config/prisma.js';
import {auth} from '../middleware/auth.js';
import {statusForAmounts,leaseStatus} from '../services/statusService.js';
import {generateContract} from '../services/pdfContractService.js';
import {generatePaymentDocument} from '../services/paymentDocumentService.js';
import {sendEmail} from '../services/emailService.js';
const router=Router();router.use(auth);
const leaseMonths=(start,end)=>Math.max(1,(end.getUTCFullYear()-start.getUTCFullYear())*12+end.getUTCMonth()-start.getUTCMonth()+(end.getUTCDate()>=start.getUTCDate()?1:0));const monthlyEndDate=(start,months)=>{const year=start.getUTCFullYear(),month=start.getUTCMonth()+months,day=start.getUTCDate(),targetLastDay=new Date(Date.UTC(year,month+1,0)).getUTCDate(),anniversary=new Date(Date.UTC(year,month,Math.min(day,targetLastDay)));anniversary.setUTCDate(anniversary.getUTCDate()-1);return anniversary};const isMonthlyRange=(start,end)=>monthlyEndDate(start,leaseMonths(start,end)).getTime()===Date.UTC(end.getUTCFullYear(),end.getUTCMonth(),end.getUTCDate());
const models={tenants:prisma.tenant,units:prisma.unit,leases:prisma.lease,payments:prisma.rentPayment,bills:prisma.bill,contracts:prisma.contract};
const schemas={tenants:z.object({fullName:z.string().min(2),phone:z.string().min(5),email:z.union([z.string().email(),z.literal('')]).optional(),idNumber:z.string().optional(),emergencyContact:z.string().optional(),emergencyPhone:z.string().optional(),notes:z.string().optional()}),units:z.object({name:z.string().min(1),propertyName:z.string().min(1),address:z.string().optional(),description:z.string().optional(),monthlyRent:z.preprocess(v=>v===''||v===undefined?undefined:v,z.coerce.number().positive())}),leases:z.object({tenantId:z.string().min(1),unitId:z.string().min(1),startDate:z.coerce.date(),endDate:z.coerce.date(),rentAmount:z.coerce.number().positive(),paymentFrequency:z.preprocess(v=>v===''||v===undefined?'monthly':v,z.enum(['monthly','yearly'])),depositAmount:z.preprocess(v=>v===''||v===undefined?0:v,z.coerce.number().min(0)).default(0),notes:z.string().optional()}),payments:z.object({leaseId:z.string(),periodStart:z.coerce.date(),periodEnd:z.coerce.date(),amountDue:z.coerce.number().positive(),amountPaid:z.coerce.number().min(0).default(0),paymentDate:z.coerce.date().optional(),reminderDate:z.coerce.date().optional(),paymentMethod:z.string().optional(),reference:z.string().optional(),notes:z.string().optional()}),bills:z.object({leaseId:z.string(),billType:z.enum(['water','electricity','other']),description:z.string().min(1),amountDue:z.coerce.number().positive(),amountPaid:z.coerce.number().min(0).default(0),dueDate:z.coerce.date(),paymentDate:z.coerce.date().optional()})};
const includes={contracts:{lease:{include:{tenant:true,unit:true}}},leases:{tenant:true,unit:true},payments:{lease:{include:{tenant:true,unit:true}},receipts:{orderBy:{paymentDate:'asc'}}},bills:{lease:{include:{tenant:true,unit:true}}}};
function clean(s,b){const input={...b};for(const [key,value] of Object.entries(input))if(value==='')delete input[key];return s.parse(input)}
async function generateAndSaveLeaseDocuments(leaseId,userId){
 const [full,owner,terms]=await Promise.all([
  prisma.lease.findUnique({where:{id:leaseId},include:{tenant:true,unit:true}}),
  prisma.user.findUnique({where:{id:userId}}),prisma.setting.findUnique({where:{key_userId:{key:'contractTerms',userId}}})
 ]);
 if(!full||!owner)throw new Error('Could not load the lease or owner for PDF generation.');
 const docs=[];let stage='generate PDF';
 try{
  for(const language of ['en','sw']){
   stage=`generate ${language} PDF`;
   const filePath=await generateContract({...full,owner,terms:terms?.value||''},language);
   docs.push({language,filePath});
   stage=`save ${language} contract path`;
   const saved=await prisma.contract.updateMany({where:{leaseId,generatedBy:userId,language},data:{filePath}});
   if(saved.count===0)await prisma.contract.create({data:{leaseId,generatedBy:userId,language,filePath}});
  }
  stage='verify saved contract paths';
  const verified=await prisma.contract.findMany({where:{leaseId,generatedBy:userId,language:{in:['en','sw']}},select:{language:true,filePath:true}});
  for(const language of ['en','sw'])if(!verified.some(record=>record.language===language&&record.filePath))throw new Error(`Contract path for ${language} was not saved to the database.`);
  return{full,owner,docs};
 }catch(error){
  error.pdfStage=stage;
  throw error;
 }
}
async function notifyLeaseDocuments(prepared,leaseId,userId,language){
 try{
  const {full,owner,docs}=prepared,sw=language==='sw',selected=docs.find(doc=>doc.language===(sw?'sw':'en'));
  const ownerSubject=sw?'Mkataba mpya wa upangaji umetengenezwa':'New lease agreement created';
  const ownerHtml=sw
   ?`<p>Mkataba wa upangaji umetengenezwa kwa ${full.tenant.fullName} katika ${full.unit.propertyName} &middot; ${full.unit.name}.</p><p>Kipindi cha mkataba: ${new Date(full.startDate).toLocaleDateString('sw-TZ')} hadi ${new Date(full.endDate).toLocaleDateString('sw-TZ')}. Kodi: TZS ${Number(full.rentAmount).toLocaleString('sw-TZ')}.</p><p>Nakala za mkataba zimeambatishwa.</p>`
   :`<p>A lease agreement was created for ${full.tenant.fullName} at ${full.unit.propertyName} &middot; ${full.unit.name}.</p><p>Lease dates: ${new Date(full.startDate).toLocaleDateString('en-GB')} to ${new Date(full.endDate).toLocaleDateString('en-GB')}. Rent: TZS ${Number(full.rentAmount).toLocaleString('en-US')}.</p><p>English and Kiswahili copies are attached.</p>`;
  const tasks=[sendEmail({to:owner.email,subject:ownerSubject,html:ownerHtml,type:'lease-created',relatedId:leaseId,userId,route:'/leases?record='+leaseId,senderEmail:owner.email,senderName:owner.name,hidePlatformFooter:true,attachments:docs.map(doc=>({filename:`lease-agreement-${doc.language==='sw'?'kiswahili':'english'}.pdf`,path:doc.filePath}))})];
  if(full.tenant.email){
   const tenantSubject=sw?'Mkataba wako wa upangaji uko tayari':'Your rental agreement is ready';
   const tenantHtml=sw?`<p>Habari ${full.tenant.fullName},</p><p>Nakala yako ya mkataba wa upangaji kwa ${full.unit.propertyName}, nyumba ${full.unit.name}, iko tayari. Tafadhali ipitie na uisaini.</p>`:`<p>Hello ${full.tenant.fullName},</p><p>Your rental agreement for ${full.unit.propertyName}, unit ${full.unit.name}, is ready to review and keep a copy.</p>`;
   tasks.push(sendEmail({to:full.tenant.email,subject:tenantSubject,html:tenantHtml,type:'contract',relatedId:leaseId,userId,route:'/leases?record='+leaseId,senderEmail:owner.email,senderName:owner.name,hidePlatformFooter:true,attachments:[{filename:`rental-agreement-${sw?'kiswahili':'english'}.pdf`,path:selected.filePath}]}));
  }
  await Promise.all(tasks);
 }catch(error){console.error('[lease document email]',leaseId,error)}
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
  await sendEmail({to:owner.email,subject:kind==='receipt'?(sw?'Malipo ya kodi yamerekodiwa':'Rent payment recorded'):(sw?'Rekodi ya malipo ya kodi imetengenezwa':'Rent payment record created'),html,type:'payment-recorded',relatedId:payment.id,userId,route:'/payments?record='+payment.id,senderEmail:owner.email,senderName:owner.name,hidePlatformFooter:true,attachments:[{filename:'rent-payment-'+payment.id+'.pdf',path:file}]});
 }catch(error){console.error('[payment email]',paymentId,error)}
}
for(const[type,model]of Object.entries(models)){
 router.get('/'+type,async(req,res,next)=>{try{const ownerWhere=type==='units'?{userId:req.user.sub,isActive:true}:type==='tenants'?{userId:req.user.sub}:type==='contracts'?{generatedBy:req.user.sub}:type==='leases'?{unit:{userId:req.user.sub}}:type==='payments'?{lease:{unit:{userId:req.user.sub}}}:type==='bills'?{lease:{unit:{userId:req.user.sub}}}:undefined;let items=await model.findMany({where:ownerWhere,include:type==='leases'?{...includes.leases,rentPayments:{select:{amountPaid:true,receipts:{select:{amount:true}}}}}:includes[type],orderBy:type==='leases'?{endDate:'asc'}:type==='contracts'?{generatedAt:'desc'}:{createdAt:'desc'}});if(type==='leases')items=items.map(({rentPayments,...x})=>({...x,status:leaseStatus(x.endDate,x.status),hasRecordedPayments:rentPayments.some(payment=>Math.max(Number(payment.amountPaid),payment.receipts.reduce((total,receipt)=>total+Number(receipt.amount),0))>0)}));if(type==='payments')items=items.map(x=>{const receiptTotal=x.receipts.reduce((n,r)=>n+Number(r.amount),0),amountPaid=Math.max(Number(x.amountPaid),receiptTotal);return {...x,amountPaid,status:statusForAmounts(x.amountDue,amountPaid,x.reminderDate||x.periodEnd)}});if(type==='bills')items=items.map(x=>({...x,status:statusForAmounts(x.amountDue,x.amountPaid,x.dueDate)}));res.json({items})}catch(e){next(e)}});
 if(type==='contracts')continue;
 if(type==='payments'){
  router.post('/payments/:id/receipts',async(req,res,next)=>{try{const body=z.object({amount:z.coerce.number().positive(),paymentDate:z.coerce.date().optional(),paymentMethod:z.string().optional(),reference:z.string().optional()}).parse(req.body),payment=await prisma.rentPayment.findUnique({where:{id:req.params.id},include:{receipts:true}});if(!payment||!await prisma.lease.findFirst({where:{id:payment.leaseId,unit:{userId:req.user.sub}}}))return res.status(404).json({error:'This rent record no longer exists in your workspace.'});const receiptTotal=payment.receipts.reduce((n,r)=>n+Number(r.amount),0),prior=Math.max(Number(payment.amountPaid),receiptTotal);if(prior+body.amount>Number(payment.amountDue))return res.status(400).json({error:'This receipt is more than the remaining balance.'});const result=await prisma.$transaction(async tx=>{const receipt=await tx.paymentReceipt.create({data:{rentPaymentId:payment.id,...body}}),amountPaid=prior+body.amount,status=statusForAmounts(payment.amountDue,amountPaid,payment.reminderDate||payment.periodEnd);await tx.rentPayment.update({where:{id:payment.id},data:{amountPaid,status,paymentDate:body.paymentDate||new Date(),paymentMethod:body.paymentMethod,reference:body.reference}});return receipt});setImmediate(()=>{void notifyPaymentRecorded(payment.id,req.user.sub,req.get('x-app-language'),'receipt',body.amount)});return res.status(201).json(result)}catch(e){next(e)}});
 }
router.post('/'+type,async(req,res,next)=>{try{let p=clean(schemas[type],req.body);if(type==='units'||type==='tenants')p.userId=req.user.sub;if(type==='leases'){const [ownerUnit,ownerTenant]=await Promise.all([prisma.unit.findFirst({where:{id:p.unitId,userId:req.user.sub}}),prisma.tenant.findFirst({where:{id:p.tenantId,userId:req.user.sub}})]);if(!ownerUnit||!ownerTenant)return res.status(400).json({error:'Choose a property and tenant from your workspace.'});
  if(p.endDate<=p.startDate)return res.status(400).json({error:'Lease end date must be after its start date'});if(!isMonthlyRange(p.startDate,p.endDate))return res.status(400).json({error:'Set the lease end date to the day before a monthly term anniversary.'});
  const occupied=await prisma.lease.findFirst({where:{unitId:p.unitId,status:'active',endDate:{gte:new Date()}}});
  if(occupied)return res.status(409).json({error:'This unit already has an active lease'});
  const unit=await prisma.unit.findFirst({where:{id:p.unitId,userId:req.user.sub}});if(!unit)return res.status(404).json({error:'Choose a property from your workspace.'});
  const monthlyRent=Number(ownerUnit.monthlyRent);if(!Number.isFinite(monthlyRent)||monthlyRent<=0)return res.status(400).json({error:'Add a monthly rent to this property before creating its lease.'});const months=leaseMonths(p.startDate,p.endDate);p.monthlyRent=monthlyRent;p.rentAmount=monthlyRent*months;
  const [lease,owner]=await Promise.all([
   model.create({data:p,include:includes.leases}),
   prisma.user.findUnique({where:{id:req.user.sub},select:{id:true,email:true,preferredLanguage:true}})
  ]);
  if(!owner)return res.status(401).json({error:'Please sign in again and retry.'});
  const requestedLanguage=req.get('x-app-language');
  const language=requestedLanguage==='en'||requestedLanguage==='sw'?requestedLanguage:(owner.preferredLanguage==='sw'?'sw':'en');
  let documents=null,contractGeneration=null;
  try{documents=await generateAndSaveLeaseDocuments(lease.id,req.user.sub)}catch(error){contractGeneration={stage:error.pdfStage||'load lease data',diagnosticCode:error.code||error.name};console.error('[lease contract generation]',req.requestId,{leaseId:lease.id,...contractGeneration,message:error.message})}
  if(documents)setImmediate(()=>{void notifyLeaseDocuments(documents,lease.id,req.user.sub,language)});
  return res.status(201).json({...lease,monthlyRent,termMonths:months,totalRent:monthlyRent*months,contractsReady:!!documents,contractGeneration})
}
if(type==='payments'||type==='bills'){const lease=await prisma.lease.findFirst({where:{id:p.leaseId,unit:{userId:req.user.sub}}});if(!lease)return res.status(400).json({error:'Choose a lease from your workspace.'})}if(type==='payments'){let amountPaid=p.amountPaid;if(amountPaid<p.amountDue&&!p.reminderDate)return res.status(400).json({error:'Set a due date for the remaining rent balance.'});delete p.amountPaid;const {paymentDate,paymentMethod,reference}=p;p.status=statusForAmounts(p.amountDue,amountPaid,p.reminderDate||p.periodEnd);let item=await prisma.rentPayment.create({data:{...p,amountPaid,receipts:amountPaid>0?{create:{amount:amountPaid,paymentDate:paymentDate||new Date(),paymentMethod,reference}}:undefined},include:includes.payments});setImmediate(()=>{void notifyPaymentRecorded(item.id,req.user.sub,req.get('x-app-language'))});return res.status(201).json({...item,amountPaid,status:p.status})}if(type==='bills')p.status=statusForAmounts(p.amountDue,p.amountPaid,p.dueDate);res.status(201).json(await model.create({data:p}))}catch(e){next(e)}});
 router.put('/'+type+'/:id',async(req,res,next)=>{try{let current=await model.findUnique({where:{id:req.params.id}});if(!current)return res.status(404).json({error:'This record no longer exists. Refresh the list and try again.'});if(['leases','payments','bills'].includes(type)&&!await model.findFirst({where:{id:req.params.id,...(type==='leases'?{unit:{userId:req.user.sub}}:type==='payments'?{lease:{unit:{userId:req.user.sub}}}:{lease:{unit:{userId:req.user.sub}}})}}))return res.status(404).json({error:'This record could not be found in your workspace.'});if((type==='units'||type==='tenants')&&current.userId!==req.user.sub)return res.status(404).json({error:'This record could not be found in your workspace.'});let p=clean(schemas[type],req.body);if(type==='leases'&&await leaseHasReceivedPayment(req.params.id))return res.status(409).json({error:'This lease has received payments and can no longer be edited.'});if(type==='leases'){if(p.endDate<=p.startDate)return res.status(400).json({error:'Lease end date must be after its start date'});if(!isMonthlyRange(p.startDate,p.endDate))return res.status(400).json({error:'Set the lease end date to the day before a monthly term anniversary.'});const [ownerUnit,ownerTenant]=await Promise.all([prisma.unit.findFirst({where:{id:p.unitId,userId:req.user.sub}}),prisma.tenant.findFirst({where:{id:p.tenantId,userId:req.user.sub}})]);if(!ownerUnit||!ownerTenant)return res.status(400).json({error:'Choose a property and tenant from your workspace.'});const months=leaseMonths(p.startDate,p.endDate);p.monthlyRent=p.rentAmount;p.rentAmount=p.monthlyRent*months;p.status=leaseStatus(p.endDate)}if(type==='payments'){const receipts=await prisma.paymentReceipt.findMany({where:{rentPaymentId:req.params.id}}),received=Math.max(Number(current.amountPaid),receipts.reduce((n,r)=>n+Number(r.amount),0));if(p.amountDue<received)return res.status(400).json({error:'The amount due cannot be lower than what the tenant has already paid.'});delete p.amountPaid;delete p.paymentDate;delete p.paymentMethod;delete p.reference;if(p.amountDue>received&&!p.reminderDate)return res.status(400).json({error:'Set a due date for the remaining rent balance.'});p.status=statusForAmounts(p.amountDue,received,p.reminderDate||p.periodEnd)}if(type==='bills')p.status=statusForAmounts(p.amountDue,p.amountPaid,p.dueDate);res.json(await model.update({where:{id:req.params.id},data:p}))}catch(e){next(e)}});
router.delete('/'+type+'/:id',async(req,res,next)=>{try{let current=await model.findUnique({where:{id:req.params.id}});if(!current)return res.status(404).json({error:'This record was already removed.'});if(['leases','payments','bills'].includes(type)&&!await model.findFirst({where:{id:req.params.id,...(type==='leases'?{unit:{userId:req.user.sub}}:type==='payments'?{lease:{unit:{userId:req.user.sub}}}:{lease:{unit:{userId:req.user.sub}}})}}))return res.status(404).json({error:'This record could not be found in your workspace.'});if((type==='units'||type==='tenants')&&current.userId!==req.user.sub)return res.status(404).json({error:'This record could not be found in your workspace.'});if(type==='leases'&&await leaseHasReceivedPayment(req.params.id))return res.status(409).json({error:'This lease has received payments and can no longer be deleted.'});if(type==='units'){const linked=await prisma.lease.findMany({where:{unitId:req.params.id},select:{id:true}});if(linked.length){await prisma.unit.update({where:{id:req.params.id},data:{isActive:false}});return res.status(204).end()}}await model.delete({where:{id:req.params.id}});res.status(204).end()}catch(e){next(e)}})
}
router.get('/leases/:id/download',async(req,res,next)=>{
 let stage='validate request';
 try{
  const language=z.enum(['en','sw']).safeParse(req.query.language);
  if(!language.success)return res.status(400).json({error:'Choose English or Kiswahili before downloading.'});
  stage='load lease and owner';
  const [lease,owner,terms]=await Promise.all([
   prisma.lease.findFirst({where:{id:req.params.id,unit:{userId:req.user.sub}},include:{tenant:true,unit:true}}),
   prisma.user.findUnique({where:{id:req.user.sub}}),
   prisma.setting.findUnique({where:{key_userId:{key:'contractTerms',userId:req.user.sub}}})
  ]);
  if(!lease)return res.status(404).json({error:'This lease could not be found in your workspace.'});
  stage='find contract record';
  let contract=await prisma.contract.findFirst({where:{leaseId:lease.id,generatedBy:req.user.sub,language:language.data}});
  let filePath=contract?.filePath;
  let fileReady=false;
  if(filePath){try{await access(filePath);fileReady=true}catch{fileReady=false}}
  if(!fileReady){
   stage='generate PDF file';
   filePath=await generateContract({...lease,owner,terms:terms?.value||''},language.data);
   stage='save PDF path to database';
   const saved=await prisma.contract.updateMany({where:{leaseId:lease.id,generatedBy:req.user.sub,language:language.data},data:{filePath}});
   if(saved.count===0)contract=await prisma.contract.create({data:{leaseId:lease.id,generatedBy:req.user.sub,language:language.data,filePath}});
   stage='verify database path';
   const stored=await prisma.contract.findFirst({where:{leaseId:lease.id,generatedBy:req.user.sub,language:language.data,filePath},select:{id:true,filePath:true}});
   if(!stored?.filePath)throw new Error('Generated PDF path was not found in the contract database record.');
  }
  stage='verify PDF file';
  await access(filePath);
  const pdfBytes=await readFile(filePath);
  if(pdfBytes.subarray(0,5).toString()!=='%PDF-')throw new Error('Stored contract file is not a valid PDF.');
  res.set({'Content-Type':'application/pdf','X-Content-Type-Options':'nosniff','Cache-Control':'private, max-age=300'});
  res.download(filePath,`lease-agreement-${language.data==='sw'?'kiswahili':'english'}.pdf`,error=>{if(error&&!res.headersSent)next(error)});
 }catch(error){
  console.error('[lease PDF generation]',req.requestId,{stage,leaseId:req.params.id,code:error.code||error.name,message:error.message});
  if(!res.headersSent)return res.status(500).json({error:'Lease PDF generation failed.',stage,requestId:req.requestId,diagnosticCode:error.code||error.name});
  next(error);
 }
});
router.get('/contracts/:id/download',async(req,res,next)=>{try{const c=await prisma.contract.findFirst({where:{id:req.params.id,generatedBy:req.user.sub}});if(!c)return res.status(404).json({error:'The agreement could not be found.'});res.redirect(307,`/api/leases/${c.leaseId}/download?language=${c.language}`)}catch(e){next(e)}});
router.get('/dashboard',async(req,res,next)=>{try{let[units,leases,tenants,payments,bills]=await Promise.all([prisma.unit.count({where:{userId:req.user.sub,isActive:true}}),prisma.lease.findMany({where:{status:'active',unit:{userId:req.user.sub}},include:{tenant:true,unit:true}}),prisma.tenant.count({where:{userId:req.user.sub}}),prisma.rentPayment.findMany({where:{lease:{unit:{userId:req.user.sub}}},include:{lease:{include:{tenant:true,unit:true}},receipts:{orderBy:{paymentDate:'asc'}}},orderBy:{createdAt:'desc'}}),prisma.bill.findMany({where:{lease:{unit:{userId:req.user.sub}}},include:{lease:{include:{tenant:true,unit:true}}}})]);payments=payments.map(p=>{const amountPaid=Math.max(Number(p.amountPaid),p.receipts.reduce((n,r)=>n+Number(r.amount),0));return {...p,amountPaid,status:statusForAmounts(p.amountDue,amountPaid,p.reminderDate||p.periodEnd)}});res.json({units,leases,tenants,payments,bills})}catch(e){next(e)}});
export default router;



