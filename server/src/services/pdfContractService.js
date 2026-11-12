import {access, mkdir, readFile, stat} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {withPdfPage} from './pdfBrowser.js';

const escapeHtml = value => String(value ?? '—').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

const formatDate = value => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  });
};

const money = value => Number(value || 0).toLocaleString('en-US');

export async function generateContract(lease, language) {
  const sw = language === 'sw';
  const labels = sw ? {
    title: 'Mkataba wa Upangaji', generated: 'Tarehe ya kutengenezwa', tenant: 'Mpangaji', owner: 'Mmiliki',
    premises: 'Nyumba inayopangishwa', period: 'Muda wa upangaji', payment: 'Kodi na malipo',
    rent: 'Kodi kwa mwezi', total: 'Jumla ya kodi kwa muda wote', deposit: 'Dhamana',
    terms: 'Masharti ya upangaji', signatures: 'Sahihi za wahusika', tenantSign: 'Mpangaji',
    ownerSign: 'Mmiliki', witness: 'Shahidi', date: 'Tarehe', agreement:
      'Mkataba huu umefanywa kati ya mmiliki na mpangaji waliotajwa hapa chini kwa nyumba na muda ulioelezwa.',
    defaults: [
      'Mpangaji atalipa kodi kwa kiasi na muda uliokubaliwa katika mkataba huu.',
      'Mpangaji atatunza nyumba na kutoa taarifa kwa mmiliki kuhusu uharibifu au matengenezo yanayohitajika.',
      'Nyumba itatumika kwa madhumuni ya makazi, isipokuwa pande zote zikubaliane vinginevyo kwa maandishi.',
      'Mabadiliko au marekebisho makubwa ya nyumba yanahitaji idhini ya maandishi ya mmiliki.',
      'Pande zote zitafuata masharti ya mkataba huu na sheria zinazotumika.'
    ]
  } : {
    title: 'Residential Lease Agreement', generated: 'Generated', tenant: 'Tenant', owner: 'Landlord / Owner',
    premises: 'Rented premises', period: 'Lease term', payment: 'Rent and payment',
    rent: 'Monthly rent', total: 'Total rent for the lease term', deposit: 'Security deposit',
    terms: 'Lease terms', signatures: 'Signatures', tenantSign: 'Tenant', ownerSign: 'Landlord / Owner',
    witness: 'Witness', date: 'Date', agreement:
      'This agreement is made between the landlord and tenant named below for the premises and term described in this document.',
    defaults: [
      'The Tenant shall pay rent in the amount and at the frequency stated in this agreement.',
      'The Tenant shall keep the premises in reasonable condition and promptly notify the Landlord of damage or repairs needed.',
      'The premises shall be used as a residence unless both parties agree otherwise in writing.',
      'Alterations to the premises require the Landlord’s written consent.',
      'Both parties shall comply with this agreement and applicable law.'
    ]
  };
  const terms = lease.terms?.trim() ? lease.terms.split(/\r?\n/).map(line => line.trim()).filter(Boolean) : labels.defaults;
  const tenant = lease.tenant || {};
  const owner = lease.owner || {};
  const unit = lease.unit || {};
  const generatedDate = formatDate(new Date());
  const rent = money(lease.monthlyRent ?? lease.rentAmount);
  const total = money(lease.rentAmount);
  const deposit = money(lease.depositAmount);
  const html = `<!doctype html>
<html lang="${sw ? 'sw' : 'en'}"><head><meta charset="utf-8"><style>
@page{size:A4;margin:15mm 16mm 18mm}*{box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;color:#1c2c36;font-size:9.5pt;line-height:1.45;margin:0}
header{border-bottom:3px solid #0f766e;padding-bottom:12px;margin-bottom:14px}.brand{color:#0f766e;font-weight:700;letter-spacing:1.5px;font-size:8pt}
h1{font-size:20pt;line-height:1.2;margin:7px 0 4px;color:#102c35}.muted,.small{color:#647780;font-size:8pt}h2{font-size:11pt;color:#0f766e;margin:15px 0 7px;border-bottom:1px solid #d8e2e4;padding-bottom:4px}
p{margin:6px 0}.grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.card{border:1px solid #d8e2e4;border-radius:5px;padding:10px;break-inside:avoid}.label{display:block;text-transform:uppercase;letter-spacing:.6px;font-size:7pt;color:#607780;margin-bottom:4px}.name{font-weight:700;font-size:11pt;color:#16333b}
.terms{padding-left:20px;margin:6px 0}.terms li{padding-left:3px;margin:0 0 6px;break-inside:avoid}.signature-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px 16px;margin-top:13px}.signature{border-bottom:1px solid #455b64;height:31px}.signature-label{font-size:8pt;color:#536a73;margin-top:4px}.footer{position:fixed;bottom:-10mm;left:0;right:0;text-align:center;color:#829198;font-size:7pt}
</style></head><body>
<header><div class="brand">TENANT MANAGER</div><h1>${labels.title}</h1><div class="muted">${labels.generated}: ${generatedDate}</div></header>
<p>${labels.agreement}</p>
<div class="grid">
 <section class="card"><span class="label">${labels.tenant}</span><div class="name">${escapeHtml(tenant.fullName)}</div><p>Phone: ${escapeHtml(tenant.phone)}<br>Email: ${escapeHtml(tenant.email)}<br>ID: ${escapeHtml(tenant.idNumber)}</p></section>
 <section class="card"><span class="label">${labels.owner}</span><div class="name">${escapeHtml(owner.name || 'Property Owner')}</div><p>Email: ${escapeHtml(owner.email)}<br>Phone: ${escapeHtml(owner.phone)}</p></section>
</div>
<h2>${labels.premises}</h2><section class="card"><strong>${escapeHtml(unit.propertyName)} · ${escapeHtml(unit.name)}</strong><br>${escapeHtml(unit.address)}</section>
<h2>${labels.period} &amp; ${labels.payment}</h2><div class="grid">
 <section class="card"><span class="label">${labels.period}</span><strong>${formatDate(lease.startDate)} – ${formatDate(lease.endDate)}</strong></section>
 <section class="card"><span class="label">${labels.payment}</span>${labels.rent}: TZS ${rent}<br>${labels.total}: TZS ${total}<br>${labels.deposit}: TZS ${deposit}<br>Frequency: ${escapeHtml(lease.paymentFrequency)}</section>
</div>
<h2>${labels.terms}</h2><ol class="terms">${terms.map(term => `<li>${escapeHtml(term)}</li>`).join('')}</ol>
<h2>${labels.signatures}</h2><p class="small">${sw ? 'Kwa kusaini hapa chini, pande zote zinathibitisha kuwa zimesoma na kukubaliana na masharti yaliyoandikwa katika mkataba huu.' : 'By signing below, each party confirms that they have read and agree to the terms written in this agreement.'}</p>
<div class="signature-grid"><div><div class="signature"></div><div class="signature-label">${labels.tenantSign} · ${escapeHtml(tenant.fullName)}</div></div><div><div class="signature"></div><div class="signature-label">${labels.ownerSign} · ${escapeHtml(owner.name || '')}</div></div><div><div class="signature"></div><div class="signature-label">${labels.witness}</div></div><div><div class="signature"></div><div class="signature-label">${labels.date}</div></div></div>
<div class="footer">Tenant Manager · ${labels.title} · ${generatedDate}</div></body></html>`;

  const directory = resolve(process.env.CONTRACT_STORAGE_DIR || resolve(dirname(fileURLToPath(import.meta.url)), '../../storage/contracts'));
  await mkdir(directory, {recursive: true});
  const path = join(directory, `${lease.id}-${language}.pdf`);
  await withPdfPage(async page => {
    await page.setContent(html, {waitUntil: 'load'});
    await page.pdf({path, format: 'A4', printBackground: true, preferCSSPageSize: true});
  });
  await access(path);
  const info = await stat(path);
  if (info.size < 5 || (await readFile(path)).subarray(0, 5).toString() !== '%PDF-') {
    throw new Error('Generated contract is not a valid PDF file.');
  }
  return path;
}
