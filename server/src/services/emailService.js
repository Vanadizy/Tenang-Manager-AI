import nodemailer from 'nodemailer';
import {prisma} from '../config/prisma.js';
let transport;
function getTransport(){if(!process.env.SMTP_HOST||!process.env.SMTP_USER||!process.env.SMTP_PASS)return null;if(!transport)transport=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT)||587,secure:Number(process.env.SMTP_PORT)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});return transport}
const baseUrl=()=>process.env.APP_URL||process.env.CLIENT_URL?.split(',')[0]||'http://localhost:5173';
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function brandedEmail({subject,html,route='/notifications',hidePlatformFooter=false,preheader='A message from TenantFlow'}){
 const rawHtml=String(html||''),style=rawHtml.match(/<style\b[^>]*>[\s\S]*?<\/style>/i)?.[0]||'',innerHtml=rawHtml.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]||rawHtml;
 const url=baseUrl()+route,link=hidePlatformFooter?'':`<tr><td style="padding:0 32px 26px"><a href="${escapeHtml(url)}" style="display:inline-block;background:#0f766e;color:#fff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:7px">Open TenantFlow</a></td></tr>`;
 const plain=innerHtml.replace(/<br\s*\/?\s*>/gi,'\n').replace(/<\/(p|div|h[1-6]|tr)>/gi,'\n').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
 return {html:`<!doctype html><html><head>${style}</head><body style="margin:0;padding:0;background:#f1f5f2;font-family:Arial,Helvetica,sans-serif;color:#243b34"><div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f2;padding:28px 12px"><tr><td align="center"><table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background:#fff;border:1px solid #dce7e1;border-radius:12px;overflow:hidden"><tr><td style="background:#123f36;padding:22px 32px;border-bottom:4px solid #0f766e"><div style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#b8e1d1">TENANTFLOW</div><div style="font-size:12px;color:#d4e8df;margin-top:5px">Property management</div></td></tr><tr><td style="padding:27px 32px 18px"><h1 style="margin:0;color:#123f36;font-size:21px;line-height:1.3">${escapeHtml(subject)}</h1></td></tr><tr><td style="padding:0 32px 24px;font-size:15px;line-height:1.65;color:#40564e">${innerHtml}</td></tr>${link}<tr><td style="padding:18px 32px;background:#f7faf8;border-top:1px solid #e5ece8;color:#718078;font-size:11px;line-height:1.5">TenantFlow · Thoughtful property management<br>This email was sent by your property management workspace.</td></tr></table></td></tr></table></body></html>`,text:`${subject}\n\n${plain}${hidePlatformFooter?'':`\n\nOpen TenantFlow: ${url}`}`};
}
export async function testEmailDelivery({to,userId,senderEmail=null,attachments=[]}){
 const missing=['SMTP_HOST','SMTP_USER','SMTP_PASS'].filter(key=>!process.env[key]);
 if(missing.length)return{success:false,code:'SMTP_NOT_CONFIGURED',problemKey:'smtpMissing',actionKey:'smtpConfigureRestart',details:`Missing settings: ${missing.join(', ')}`};
 const mail=getTransport();
 try{
  await mail.verify();
  const subject='TenantFlow email setup test',content=brandedEmail({subject,preheader:'Your email delivery settings are ready.',html:'<p style="margin:0 0 12px">Your TenantFlow email settings are working.</p><p style="margin:0">Your mail server accepted this test message. Inbox delivery is not confirmed.</p>'});
  const info=await mail.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,replyTo:senderEmail||undefined,to,subject,...content,attachments});
  if(!info.accepted?.some(address=>String(address).toLowerCase()===String(to).toLowerCase()))throw new Error(`The mail server did not accept ${to}.`);
  await prisma.emailLog.create({data:{recipient:to,subject:'Tenant Manager email setup test',bodyPreview:'The configured mail server accepted this test message. Inbox delivery is not confirmed.',emailType:'email-test',status:'accepted',sentAt:new Date(),userId}});
  return{success:true,deliveryStatus:'accepted'};
 }catch(e){
  console.error('[email delivery] SMTP diagnostic failed:',e.code||'ERROR',e.responseCode||'',e.message);
  await prisma.emailLog.create({data:{recipient:to,subject:'Tenant Manager email setup test',bodyPreview:'Test email failed or was not accepted by the mail server.',emailType:'email-test',status:'failed',errorMessage:e.message,userId}}).catch(logError=>console.error('[email delivery] Could not save diagnostic:',logError.message));
  let problemKey='smtpGenericError',actionKey='smtpGenericInstructions';
  if(e.responseCode===535||e.code==='EAUTH'){problemKey='smtpAuthRejected';actionKey='smtpAuthInstructions'}
  else if(e.code==='ECONNECTION'||e.code==='ETIMEDOUT'||e.code==='ESOCKET'){problemKey='smtpConnectionError';actionKey='smtpNetworkInstructions'}
  else if(e.responseCode===550||e.responseCode===553){problemKey='smtpSenderRejected';actionKey='smtpSenderInstructions'}
  return{success:false,code:e.code||'SMTP_ERROR',responseCode:e.responseCode||null,problemKey,actionKey,details:e.message};
 }
}
export async function sendEmail({to,subject,html,type='notice',relatedId=null,userId=null,route='/notifications',attachments=[],senderEmail=null,senderName=null,hidePlatformFooter=false}){
 const url=baseUrl()+route,bodyPreview=(html+' App link: '+url).replace(/<[^>]+>/g,' ').slice(0,500),mail=getTransport();
 if(!mail){const reason='SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured';console.error('[email delivery] Not sent: '+reason);await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview,emailType:type,status:'not_sent',errorMessage:'Email delivery is unavailable',relatedId,userId}});return{sent:false,reason}}
 const content=brandedEmail({subject,html,route,hidePlatformFooter,preheader:subject}),replyTo=senderEmail?{name:senderName||senderEmail,address:senderEmail}:undefined;
 try{const info=await mail.sendMail({from:process.env.SMTP_FROM||process.env.SMTP_USER,replyTo,to,subject,...content,attachments});if(!info.accepted?.some(address=>String(address).toLowerCase()===String(to).toLowerCase())){const reason=info.rejected?.length?`The mail server rejected ${to}.`:`The mail server did not confirm acceptance of ${to}.`;await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview,emailType:type,status:'failed',errorMessage:reason,relatedId,userId}});return{sent:false,reason}}await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview:bodyPreview+' Mail server accepted the message; inbox delivery is not confirmed.',emailType:type,status:'accepted',sentAt:new Date(),relatedId,userId}});return{sent:true,deliveryStatus:'accepted'}}
 catch(e){console.error('[email delivery] SMTP send failed:',e.code||'ERROR',e.responseCode||'',e.message);await prisma.emailLog.create({data:{recipient:to,subject,bodyPreview,emailType:type,status:'failed',errorMessage:e.message,relatedId,userId}});return{sent:false,error:e.message}}
}
