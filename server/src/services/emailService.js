import nodemailer from 'nodemailer';
import {prisma} from '../config/prisma.js';
let transport;
function getTransport(){if(!process.env.SMTP_HOST||!process.env.SMTP_USER||!process.env.SMTP_PASS)return null;if(!transport)transport=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT)||587,secure:Number(process.env.SMTP_PORT)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});return transport}
const baseUrl=()=>process.env.APP_URL||process.env.CLIENT_URL?.split(',')[0]||'http://localhost:5173';
export async function testEmailDelivery({to,userId}){
 const missing=['SMTP_HOST','SMTP_USER','SMTP_PASS'].filter(key=>!process.env[key]);
 if(missing.length)return{success:false,code:'SMTP_NOT_CONFIGURED',problemKey:'smtpMissing',actionKey:'smtpConfigureRestart',details:`Missing settings: ${missing.join(', ')}`};
 const mail=getTransport();
 try{
  await mail.verify();
  const info=await mail.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to,subject:'Tenant Manager email setup test',text:'Your Tenant Manager email settings are working. This test confirms the SMTP connection and message delivery.'});
  await prisma.emailLog.create({data:{recipient:to,subject:'Tenant Manager email setup test',bodyPreview:'Test email to confirm SMTP connection and message delivery.',emailType:'email-test',status:'sent',sentAt:new Date(),userId}});
  return{success:true};
 }catch(e){
  console.error('[email delivery] SMTP diagnostic failed:',e.code||'ERROR',e.responseCode||'',e.message);
  await prisma.emailLog.create({data:{recipient:to,subject:'Tenant Manager email setup test',bodyPreview:'Test email to confirm SMTP connection and message delivery.',emailType:'email-test',status:'failed',errorMessage:e.message,userId}}).catch(logError=>console.error('[email delivery] Could not save diagnostic:',logError.message));
  let problemKey='smtpGenericError',actionKey='smtpGenericInstructions';
  if(e.responseCode===535||e.code==='EAUTH'){problemKey='smtpAuthRejected';actionKey='smtpAuthInstructions'}
  else if(e.code==='ECONNECTION'||e.code==='ETIMEDOUT'||e.code==='ESOCKET'){problemKey='smtpConnectionError';actionKey='smtpNetworkInstructions'}
  else if(e.responseCode===550||e.responseCode===553){problemKey='smtpSenderRejected';actionKey='smtpSenderInstructions'}
  return{success:false,code:e.code||'SMTP_ERROR',responseCode:e.responseCode||null,problemKey,actionKey,details:e.message};
 }
}
export async function sendEmail({to,subject,html,type='notice',relatedId=null,userId=null,route='/notifications',attachments=[]}){
 const url=baseUrl()+route,bodyPreview=(html+' App link: '+url).replace(/<[^>]+>/g,' ').slice(0,500),mail=getTransport();
 if(!mail){const reason='SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured';console.error('[email delivery] Not sent: '+reason);await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview,emailType:type,status:'not_sent',errorMessage:'Email delivery is unavailable',relatedId,userId}});return{sent:false,reason}}
 const fullHtml=html+'<hr><p>Open Tenant Manager: <a href="'+url+'">View related item</a></p>';
 try{await mail.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,to,subject,html:fullHtml,attachments});await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview,emailType:type,status:'sent',sentAt:new Date(),relatedId,userId}});return{sent:true}}
 catch(e){console.error('[email delivery] SMTP send failed:',e.code||'ERROR',e.responseCode||'',e.message);await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview,emailType:type,status:'failed',errorMessage:e.message,relatedId,userId}});return{sent:false,error:e.message}}
}
