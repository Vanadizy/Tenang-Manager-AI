import React,{useEffect,useState}from'react';
import{useTranslation}from'react-i18next';
import{Bell,CheckCircle2,ExternalLink,Mail,AlertCircle}from'lucide-react';
import{api}from'./state.js';

export default function NotificationsPage(){
 const{t}=useTranslation();
 const[items,setItems]=useState([]),[error,setError]=useState('');
 useEffect(()=>{api.get('/settings/notifications').then(r=>setItems(r.data.items||[])).catch(e=>setError(e.response?.data?.error||t('notificationLoadError')))},[]);
 return <div className="notification-page"><div className="page-heading"><div><span className="eyebrow">{t('workspace')}</span><h1>{t('notifications')}</h1><p>{t('emailActivity')}</p></div><Bell size={21}/></div>
  {error&&<div className="alert-error">{error}</div>}
  {items.length?items.map(n=><article className="notification-card" key={n.id}><span className={'notification-state '+(n.status==='sent'?'sent':'failed')}>{n.status==='sent'?<CheckCircle2 size={17}/>:<AlertCircle size={17}/>}</span><div className="notification-content"><div className="notification-title"><strong>{n.subject}</strong><span className="status">{t(n.status==='not_configured'?'not_sent':n.status,{defaultValue:n.status==='not_configured'?t('notSent'):n.status})}</span></div><p>{t('to')}: {n.recipient}</p><p>{n.bodyPreview}</p>{n.errorMessage&&n.status!=='sent'&&<p><strong>{t('emailErrorDetails')}: </strong>{n.errorMessage}</p>}{n.bodyPreview.match(/App link: (https?:\/\/[^ ]+)/)?.[1]&&<a href={n.bodyPreview.match(/App link: (https?:\/\/[^ ]+)/)[1]}>{t('relatedRecord')} <ExternalLink size={13}/></a>}</div><time>{new Date(n.createdAt).toLocaleString()}</time></article>):!error&&<div className="empty-state"><span><Mail size={21}/></span><strong>{t('noEmailActivity')}</strong><p>{t('emailActivityEmpty')}</p></div>}
 </div>
}
