import React,{useContext,useEffect,useState}from'react';
import{useNavigate}from'react-router-dom';
import{Settings,Bell,UserRound,MailCheck,Sparkles}from'lucide-react';
import{api,apiErrorMessage,Lang,Auth,notify}from'./state.js';
import{useTranslation}from'react-i18next';

export default function SettingsPage(){
 const{t}=useTranslation(),{language,changeLanguage}=useContext(Lang),{updateUser}=useContext(Auth),navigate=useNavigate();
 const[settings,setSettings]=useState({rentReminderDays:5,leaseReminderDays:30,ownerAlertEmails:'',reminderTime:'08:00',assistantMode:'system'});
 const[profile,setProfile]=useState({name:'',email:'',phone:''});
 const[saved,setSaved]=useState(''),[error,setError]=useState(''),[diagnostic,setDiagnostic]=useState(null),[checkingEmail,setCheckingEmail]=useState(false),[confirmMode,setConfirmMode]=useState(false),[savingMode,setSavingMode]=useState(false);
 useEffect(()=>{Promise.all([api.get('/settings'),api.get('/auth/me'),api.get('/assistant/settings')]).then(([a,b,c])=>{setSettings({...a.data.settings,...c.data.settings});setProfile({name:b.data.name||'',email:b.data.email||'',phone:b.data.phone||''})}).catch(e=>setError(e.response?.data?.error||t('couldNotSettings')))},[]);
 async function saveSettings(){try{let{data}=await api.put('/settings',settings);setSettings({...settings,...data.settings});setSaved(t('settingsSaved'));notify(t('settingsSaved'),'success');setError('')}catch(e){setError(e.response?.data?.error||t('unableSaveSettings'))}}
 function saveAssistantMode(){setError('');setConfirmMode(true)}
 async function confirmAssistantMode(){setSavingMode(true);try{await api.put('/assistant/settings',{assistantMode:settings.assistantMode},{skipGlobalError:true});window.dispatchEvent(new CustomEvent('assistant-mode-changed',{detail:settings.assistantMode}));setSaved(t('settingsSaved'));notify(t('settingsSaved'),'success');setError('');setConfirmMode(false);navigate(settings.assistantMode==='chat'?'/assistant':'/')}catch(e){setError(apiErrorMessage(e)||t('unableSaveSettings'))}finally{setSavingMode(false)}}
 async function saveProfile(){try{let{data}=await api.put('/auth/profile',profile);updateUser(data);setSaved(t('profileSaved'));notify(t('profileSaved'),'success');setError('')}catch(e){setError(e.response?.data?.error||t('unableSaveProfile'))}}
 async function checkEmail(){setCheckingEmail(true);setDiagnostic(null);try{const{data}=await api.post('/settings/email-test');setDiagnostic(data);if(data.success)notify(t('emailTestSuccess'),'success')}catch(e){setDiagnostic({success:false,problemKey:'smtpGenericError',details:e.response?.data?.error||e.message})}finally{setCheckingEmail(false)}}
 return <>
  <div className="page-heading"><div><span className="eyebrow">{t('workspace')}</span><h1>{t('settings')}</h1><p>{t('settingsSubtitle')}</p></div><Settings size={21}/></div>
  {error&&<div className="alert-error">{error}</div>}{saved&&<div className="success-banner">{saved}</div>}
  <div className="settings-grid">
   <section className="panel settings-panel"><div className="panel-heading"><div><h2><Bell size={16}/> {t('remindersEmail')}</h2><p>{t('accountStored')}</p></div></div>
    <label className="setting-row"><span><strong>{t('rentReminder')}</strong><small>{t('disableZero')}</small></span><span className="input-suffix"><input type="number" min="0" max="60" value={settings.rentReminderDays} onChange={e=>setSettings({...settings,rentReminderDays:e.target.value})}/> {t('daysBefore')}</span></label>
    <label className="setting-row"><span><strong>{t('leaseExpiryReminder')}</strong><small>{t('disableZero')}</small></span><span className="input-suffix"><input type="number" min="0" max="180" value={settings.leaseReminderDays} onChange={e=>setSettings({...settings,leaseReminderDays:e.target.value})}/> {t('daysBefore')}</span></label>
    <label className="field-label setting-emails">{t('ownerAlertEmails')}<input value={settings.ownerAlertEmails} placeholder={t('emailListPlaceholder')} onChange={e=>setSettings({...settings,ownerAlertEmails:e.target.value})}/><small>{t('multipleEmails')}</small></label>
    <label className="setting-row"><span><strong>{t('reminderTime')}</strong><small>{t('reminderTimeHelp')}</small></span><input type="time" value={settings.reminderTime||'08:00'} onChange={e=>setSettings({...settings,reminderTime:e.target.value})}/></label>
    <button className="btn btn-primary settings-action" onClick={saveSettings}>{t('saveNotificationSettings')}</button>
    <div className="email-diagnostic"><div><strong><MailCheck size={16}/> {t('emailDiagnostics')}</strong><p>{t('emailDiagnosticsHelp')}</p></div><button className="btn btn-outline" onClick={checkEmail} disabled={checkingEmail||!profile.email}>{checkingEmail?t('checkingEmail'):t('sendTestEmail')}</button>
     {!profile.email&&<small>{t('emailTestNeedsOwnerEmail')}</small>}
     {diagnostic&&<div className={'email-diagnostic-result '+(diagnostic.success?'success':'failure')} role="status"><strong>{diagnostic.success?t('emailTestSuccess'):t(diagnostic.problemKey||'smtpGenericError')}</strong>{diagnostic.details&&<p>{t('serverDetails')}: {diagnostic.details}{diagnostic.responseCode?` (${diagnostic.responseCode})`:''}</p>}{!diagnostic.success&&diagnostic.actionKey&&<p>{t(diagnostic.actionKey)}</p>}</div>}
    </div>
   </section>
   <section className="panel settings-panel"><div className="panel-heading"><div><h2><UserRound size={16}/> {t('ownerProfile')}</h2><p>{t('profileUsed')}</p></div></div>
    <label className="field-label setting-emails">{t('fullName')}<input value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})}/></label>
    <label className="field-label setting-emails">{t('emailAddress')}<input type="email" value={profile.email} onChange={e=>setProfile({...profile,email:e.target.value})}/></label>
    <label className="field-label setting-emails">{t('phoneNumber')}<input value={profile.phone} placeholder="+255 …" onChange={e=>setProfile({...profile,phone:e.target.value})}/></label>
    <button className="btn btn-primary settings-action" onClick={saveProfile}>{t('saveProfile')}</button>
   </section>
   <section className="panel settings-panel"><div className="panel-heading"><div><h2><Sparkles size={16}/> {t('aiAgent')}</h2><p>{t('assistantConfigureHelp')}</p></div></div>
    <label className="setting-row"><span><strong>{t('assistantMode')}</strong><small>{t('assistantModeHelp')}</small></span><select value={settings.assistantMode||'system'} onChange={e=>setSettings({...settings,assistantMode:e.target.value})}><option value="system">{t('systemMode')}</option><option value="chat">{t('chatMode')}</option></select></label>
    <p className="ai-env-help">{t('aiEnvironmentHelp')}</p>
    <button className="btn btn-primary settings-action" onClick={saveAssistantMode}>{t('saveNotificationSettings')}</button>
   </section>
   <section className="panel settings-panel"><div className="panel-heading"><div><h2>{t('language')}</h2><p>{t('availableLanguages')}</p></div></div><label className="setting-row"><span><strong>{t('displayLanguage')}</strong></span><select value={language} onChange={e=>changeLanguage(e.target.value)}><option value="en">English</option><option value="sw">Kiswahili</option></select></label></section>
  </div>
  {confirmMode&&<div className="modal-backdrop" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&!savingMode&&setConfirmMode(false)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="assistant-mode-confirm-title"><div className="modal-heading"><div><span className="eyebrow">{t('aiAgent')}</span><h2 id="assistant-mode-confirm-title">{t(settings.assistantMode==='chat'?'switchToChatMode':'switchToSystemMode')}</h2></div></div><div className="record-form"><p>{t(settings.assistantMode==='chat'?'confirmSwitchToChat':'confirmSwitchToSystem')}</p>{error&&<div className="alert-error" role="alert">{error}</div>}<div className="modal-actions"><button type="button" className="btn btn-outline" onClick={()=>setConfirmMode(false)} disabled={savingMode}>{t('cancel')}</button><button type="button" className="btn btn-primary" onClick={confirmAssistantMode} disabled={savingMode}>{savingMode?t('saving'):t(settings.assistantMode==='chat'?'switchToChatMode':'switchToSystemMode')}</button></div></div></section></div>}
 </>
}
