import cron from 'node-cron';
import {prisma} from '../config/prisma.js';
import {sendEmail} from '../services/emailService.js';
import {statusForAmounts} from '../services/statusService.js';
import {generateContract} from '../services/pdfContractService.js';

const timeZone='Africa/Dar_es_Salaam';
const dayInDar=value=>new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value));
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

async function settingsFor(userId){
 const rows=await prisma.setting.findMany({where:{userId}});
 const out={rentReminderDays:Number(process.env.REMINDER_DAYS)||5,leaseReminderDays:Number(process.env.LEASE_REMINDER_DAYS)||30,ownerAlertEmails:'',reminderTime:'08:00'};
 for(const row of rows)out[row.key]=['ownerAlertEmails','reminderTime'].includes(row.key)?row.value:Number(row.value);
 return out;
}

export async function runReminders(targetOwnerId=null){
 const today=dayInDar(new Date()),todayStart=new Date(today+'T00:00:00.000Z'),owners=await prisma.user.findMany({where:targetOwnerId?{id:targetOwnerId}:undefined});
 for(const owner of owners){
  const cfg=await settingsFor(owner.id),emails=[...new Set([owner.email,...(cfg.ownerAlertEmails||'').split(',')].map(value=>value.trim()).filter(Boolean))],leaseTarget=new Date(todayStart);
  leaseTarget.setUTCDate(leaseTarget.getUTCDate()+cfg.leaseReminderDays);
  const payments=await prisma.rentPayment.findMany({where:{status:{in:['pending','partial','overdue']},lease:{unit:{userId:owner.id}}},include:{receipts:true,lease:{include:{tenant:true,unit:true}}}});
  for(const payment of payments){
   
   const amountPaid=Math.max(Number(payment.amountPaid),payment.receipts.reduce((total,receipt)=>total+Number(receipt.amount),0));
   const dueDate=payment.reminderDate||payment.periodEnd,status=statusForAmounts(payment.amountDue,amountPaid,dueDate);
   if(status!==payment.status)await prisma.rentPayment.updateMany({where:{id:payment.id},data:{status}});
   const remaining=Math.max(0,Number(payment.amountDue)-amountPaid),reminderStart=new Date(dueDate);reminderStart.setUTCDate(reminderStart.getUTCDate()-cfg.rentReminderDays);const isReminderDay=dayInDar(reminderStart)<=today;
   if(remaining>0&&isReminderDay&&payment.lease.tenant.email){
    const already=await prisma.emailLog.findFirst({where:{relatedId:payment.id,emailType:'rent-balance-reminder',createdAt:{gte:todayStart}}});
    if(!already){
     const sw=owner.preferredLanguage==='sw',tenant=escapeHtml(payment.lease.tenant.fullName),start=new Date(payment.periodStart).toLocaleDateString(sw?'sw-TZ':'en-GB',{timeZone}),end=new Date(payment.periodEnd).toLocaleDateString(sw?'sw-TZ':'en-GB',{timeZone}),balanceNote=payment.notes?`<p>${sw?'Maelezo kuhusu salio':'Balance note'}: ${escapeHtml(payment.notes)}</p>`:'';
     const html=sw
      ?`<p>Habari ${tenant},</p><p>Kipindi cha kodi: ${start} hadi ${end}.</p><p>Jumla inayodaiwa: TZS ${Number(payment.amountDue).toLocaleString('sw-TZ')}. Kiasi kilichopokelewa: TZS ${amountPaid.toLocaleString('sw-TZ')}. Salio: TZS ${remaining.toLocaleString('sw-TZ')}.</p>${balanceNote}<p>Tafadhali kamilisha malipo kufikia tarehe ${new Date(dueDate).toLocaleDateString('sw-TZ',{timeZone})}. Ikiwa umekamilisha malipo kabla ya tarehe hii, puuza ujumbe huu.</p>`
      :`<p>Hello ${tenant},</p><p>Rent period: ${start} to ${end}.</p><p>Total due: TZS ${Number(payment.amountDue).toLocaleString('en-US')}. Received: TZS ${amountPaid.toLocaleString('en-US')}. Remaining balance: TZS ${remaining.toLocaleString('en-US')}.</p>${balanceNote}<p>Please complete payment by ${new Date(dueDate).toLocaleDateString('en-GB',{timeZone})}. If you paid before this date, please disregard this reminder.</p>`;
     const [leaseDoc,terms]=await Promise.all([prisma.lease.findUnique({where:{id:payment.leaseId},include:{tenant:true,unit:true}}),prisma.setting.findUnique({where:{key_userId:{key:'contractTerms',userId:owner.id}}})]);const contractPath=leaseDoc?await generateContract({...leaseDoc,owner,terms:terms?.value||''},sw?'sw':'en'):null;
     await sendEmail({to:payment.lease.tenant.email,subject:sw?'Kumbusho la salio la kodi':'Rent balance reminder',html,type:'rent-balance-reminder',relatedId:payment.id,userId:owner.id,route:'/payments?record='+payment.id,attachments:contractPath?[{filename:'rental-agreement.pdf',path:contractPath}]:[],senderEmail:owner.email,senderName:owner.name,hidePlatformFooter:true});
    }
   }
   if(status==='overdue')for(const to of emails)await sendEmail({to,subject:owner.preferredLanguage==='sw'?'Arifa ya kodi iliyochelewa':'Overdue rent alert',html:`<p>${escapeHtml(payment.lease.tenant.fullName)} ${owner.preferredLanguage==='sw'?'ana salio la kodi lililochelewa':'has an overdue rent balance'}: TZS ${remaining.toLocaleString()} (${escapeHtml(payment.lease.unit.propertyName)}, ${escapeHtml(payment.lease.unit.name)}).</p>`,type:'overdue-owner',relatedId:payment.id,userId:owner.id,route:'/payments?record='+payment.id,senderEmail:owner.email});
  }
  const bills=await prisma.bill.findMany({where:{status:{in:['pending','partial','overdue']},lease:{unit:{userId:owner.id}}},include:{lease:{include:{tenant:true,unit:true}}}});
  for(const bill of bills){const status=statusForAmounts(bill.amountDue,bill.amountPaid,bill.dueDate);if(status!==bill.status)await prisma.bill.updateMany({where:{id:bill.id},data:{status}});if(status==='overdue')for(const to of emails)await sendEmail({to,subject:'Overdue bill alert',html:`<p>${bill.billType} bill for ${escapeHtml(bill.lease.tenant.fullName)} is overdue. Balance: TZS ${(Number(bill.amountDue)-Number(bill.amountPaid)).toLocaleString()}.</p>`,type:'overdue-owner',relatedId:bill.id,userId:owner.id,route:'/bills?record='+bill.id,senderEmail:owner.email})}
  if(cfg.leaseReminderDays>0){
   const ending=await prisma.lease.findMany({where:{status:'active',endDate:{gte:todayStart,lte:leaseTarget},unit:{userId:owner.id}},include:{tenant:true,unit:true}});
   for(const lease of ending)if(lease.tenant.email){const already=await prisma.emailLog.findFirst({where:{relatedId:lease.id,emailType:'lease-reminder',createdAt:{gte:todayStart}}});if(!already)await sendEmail({to:lease.tenant.email,subject:'Lease ending soon',html:`<p>Hello ${escapeHtml(lease.tenant.fullName)}, your lease for ${escapeHtml(lease.unit.propertyName)}, unit ${escapeHtml(lease.unit.name)}, ends on ${new Date(lease.endDate).toLocaleDateString()}.</p>`,type:'lease-reminder',relatedId:lease.id,userId:owner.id,route:'/leases?record='+lease.id,senderEmail:owner.email})}
  }
 }
}

cron.schedule('* * * * *',async()=>{try{const now=new Intl.DateTimeFormat('en-GB',{timeZone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date());const owners=await prisma.user.findMany({select:{id:true}});for(const owner of owners){const cfg=await settingsFor(owner.id);if(cfg.reminderTime===now)await runReminders(owner.id)}}catch(error){console.error('[reminder job]',error)}},{timezone:timeZone});
