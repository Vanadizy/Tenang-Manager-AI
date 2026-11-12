const escapeHtml = value => String(value ?? '—').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

export function buildLeasePreview(lease, owner, language) {
  const sw = language === 'sw';
  const tenant = lease.tenant || {};
  const unit = lease.unit || {};
  const h = escapeHtml;
  const date = value => value ? new Date(value).toLocaleDateString(sw ? 'sw-TZ' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  }) : '—';
  const amount = value => Number(value || 0).toLocaleString('en-US');
  const title = sw ? 'Mkataba wa Upangaji' : 'Residential Lease Agreement';
  const defaultTerms = sw ? [
    'Mpangaji atalipa kodi kwa kiasi na muda uliokubaliwa.',
    'Mpangaji atatunza nyumba na kutoa taarifa kuhusu matengenezo yanayohitajika.',
    'Nyumba itatumika kwa makazi isipokuwa pande zote zikubaliane vinginevyo kwa maandishi.',
    'Mabadiliko makubwa yanahitaji idhini ya maandishi ya mmiliki.'
  ] : [
    'The Tenant shall pay rent in the amount and at the frequency stated in this agreement.',
    'The Tenant shall keep the premises in reasonable condition and promptly report repairs needed.',
    'The premises shall be used as a residence unless both parties agree otherwise in writing.',
    'Alterations require the Landlord’s written consent.'
  ];

  return `<!doctype html><html lang="${sw ? 'sw' : 'en'}"><head><meta charset="utf-8"><style>
    *{box-sizing:border-box}body{font:14px/1.5 Arial,sans-serif;color:#1c2c36;max-width:780px;margin:0 auto;padding:34px}
    header{border-bottom:3px solid #0f766e;padding-bottom:16px;margin-bottom:20px}.brand{color:#0f766e;font-weight:bold;letter-spacing:2px;font-size:11px}
    h1{font-size:26px;margin:8px 0}h2{font-size:16px;color:#0f766e;border-bottom:1px solid #d8e2e4;padding-bottom:5px;margin:24px 0 10px}
    .meta{color:#647780;font-size:12px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.card{border:1px solid #d8e2e4;border-radius:6px;padding:13px;break-inside:avoid}
    .label{display:block;color:#607780;text-transform:uppercase;letter-spacing:.7px;font-size:10px;margin-bottom:6px}.name{font-weight:bold;font-size:15px}
    .terms li{margin:0 0 8px}.signatures{display:grid;grid-template-columns:1fr 1fr;gap:30px 20px;margin-top:24px}
    .signature{height:34px;border-bottom:1px solid #455b64}.signature-label{font-size:11px;color:#536a73;margin-top:5px}
    @media print{body{max-width:none;padding:0}h2{break-after:avoid}.card,li{break-inside:avoid}}
  </style></head><body><header><div class="brand">TENANT MANAGER</div><h1>${title}</h1>
  <div class="meta">${sw ? 'Tarehe ya kutengenezwa' : 'Generated'}: ${date(new Date())}</div></header>
  <p>${sw ? 'Mkataba huu umefanywa kati ya mmiliki na mpangaji waliotajwa hapa chini kwa nyumba na muda ulioelezwa.' : 'This agreement is made between the owner and tenant named below for the premises and term described here.'}</p>
  <div class="grid"><section class="card"><span class="label">${sw ? 'Mpangaji' : 'Tenant'}</span><div class="name">${h(tenant.fullName)}</div><p>Phone: ${h(tenant.phone)}<br>Email: ${h(tenant.email)}<br>ID: ${h(tenant.idNumber)}</p></section>
  <section class="card"><span class="label">${sw ? 'Mmiliki' : 'Landlord / Owner'}</span><div class="name">${h(owner?.name || 'Property Owner')}</div><p>Email: ${h(owner?.email)}<br>Phone: ${h(owner?.phone)}</p></section></div>
  <h2>${sw ? 'Nyumba inayopangishwa' : 'Rented premises'}</h2><section class="card"><b>${h(unit.propertyName)} · ${h(unit.name)}</b><br>${h(unit.address)}</section>
  <h2>${sw ? 'Muda na malipo' : 'Term and payment'}</h2><div class="grid"><section class="card"><span class="label">${sw ? 'Kipindi cha upangaji' : 'Lease period'}</span>${date(lease.startDate)} – ${date(lease.endDate)}</section>
  <section class="card"><span class="label">${sw ? 'Kodi na malipo' : 'Rent and payment'}</span>${sw ? 'Kodi ya mwezi' : 'Monthly rent'}: TZS ${amount(lease.monthlyRent ?? lease.rentAmount)}<br>${sw ? 'Jumla ya kodi' : 'Total rent'}: TZS ${amount(lease.rentAmount)}<br>${sw ? 'Dhamana' : 'Deposit'}: TZS ${amount(lease.depositAmount)}<br>${sw ? 'Mzunguko wa malipo' : 'Frequency'}: ${h(lease.paymentFrequency)}</section></div>
  <h2>${sw ? 'Masharti ya upangaji' : 'Lease terms'}</h2><ol class="terms">${defaultTerms.map(term => `<li>${h(term)}</li>`).join('')}</ol>
  <h2>${sw ? 'Sahihi za wahusika' : 'Signatures'}</h2><p>${sw ? 'Kwa kusaini, pande zote zinathibitisha kuwa zimekubali masharti haya.' : 'By signing, both parties confirm their agreement to these terms.'}</p>
  <div class="signatures"><div><div class="signature"></div><div class="signature-label">${sw ? 'Mpangaji' : 'Tenant'} · ${h(tenant.fullName)}</div></div>
  <div><div class="signature"></div><div class="signature-label">${sw ? 'Mmiliki' : 'Landlord / Owner'} · ${h(owner?.name)}</div></div>
  <div><div class="signature"></div><div class="signature-label">${sw ? 'Shahidi' : 'Witness'}</div></div><div><div class="signature"></div><div class="signature-label">${sw ? 'Tarehe' : 'Date'}</div></div></div></body></html>`;
}
