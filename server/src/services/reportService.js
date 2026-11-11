import { withPdfPage } from './pdfBrowser.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function renderMetric(metric) {
  const tone = metric.tone === 'alert' ? 'metric-alert' : metric.tone === 'positive' ? 'metric-positive' : '';
  return `<td class="metric-cell"><div class="metric ${tone}"><div class="metric-label">${escapeHtml(metric.label)}</div><div class="metric-value">${escapeHtml(metric.value)}</div></div></td>`;
}

function renderSection(section) {
  const columns = section.columns.map(column => `<th style="text-align:${column.align || 'left'}">${escapeHtml(column.label)}</th>`).join('');
  const rows = section.rows.length
    ? section.rows.map(row => `<tr>${row.map((value, index) => `<td style="text-align:${section.columns[index]?.align || 'left'}">${escapeHtml(value)}</td>`).join('')}</tr>`).join('')
    : `<tr><td class="empty" colspan="${section.columns.length}">${escapeHtml(section.emptyMessage || 'No records in this section.')}</td></tr>`;
  return `<section class="report-section"><h2>${escapeHtml(section.title)} <span>${section.rows.length}</span></h2><table class="data-table"><thead><tr>${columns}</tr></thead><tbody>${rows}</tbody></table></section>`;
}

export function renderReportHtml(report) {
  const metrics = [];
  for (let index = 0; index < report.metrics.length; index += 4) {
    const row = report.metrics.slice(index, index + 4);
    while (row.length < 4) row.push({ label: '', value: '' });
    metrics.push(`<tr>${row.map(renderMetric).join('')}</tr>`);
  }
  const sections = report.sections.map(renderSection).join('');
  const generated = new Date(report.generatedAt || new Date()).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Dar_es_Salaam'
  });
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @page{size:A4;margin:16mm 13mm 18mm}*{box-sizing:border-box}body{margin:0;background:#f3f6f4;color:#243b34;font:13px/1.5 Arial,Helvetica,sans-serif}.page{max-width:900px;margin:0 auto;background:#fff}.hero{background:#123f36;color:#fff;padding:30px 34px;border-bottom:5px solid #0f766e}.brand{color:#b8e1d1;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase}.hero h1{font-size:27px;line-height:1.2;margin:11px 0 6px}.subtitle{color:#d4e8df;margin:0}.prepared{color:#b8d3c8;font-size:11px;margin-top:16px}.content{padding:25px 30px 32px}.intro{color:#5d7068;margin:0 0 18px}.metrics{border-collapse:separate;border-spacing:7px 0;width:calc(100% + 14px);margin:0 -7px 20px}.metric-cell{width:25%;vertical-align:top;padding:0 0 8px}.metric{height:78px;border:1px solid #e2eae6;border-radius:10px;background:#f7faf8;padding:13px}.metric-positive{background:#eff8f3;border-color:#d6ebdf}.metric-alert{background:#fff2ef;border-color:#f4d7d1}.metric-label{font-size:10px;color:#75847f}.metric-value{font-size:20px;font-weight:700;color:#123f36;margin-top:5px;overflow-wrap:anywhere}.metric-alert .metric-value{color:#b44736}.report-section{margin:22px 0 0;break-inside:auto}.report-section h2{font-size:15px;color:#123f36;margin:0 0 9px;border-bottom:1px solid #dce8e2;padding-bottom:7px}.report-section h2 span{display:inline-block;min-width:21px;margin-left:5px;border-radius:20px;background:#e8f5ef;color:#176b50;text-align:center;padding:1px 6px;font-size:10px;vertical-align:2px}.data-table{width:100%;border-collapse:collapse;font-size:10px}.data-table th{background:#edf4f0;color:#61736b;padding:9px 8px;font-size:9px;text-transform:uppercase;letter-spacing:.4px;border-bottom:1px solid #dce8e2}.data-table td{padding:8px;border-bottom:1px solid #e8eeeb;color:#40564e;vertical-align:top;overflow-wrap:anywhere}.data-table tbody tr:nth-child(even){background:#fbfcfb}.data-table .empty{text-align:left;color:#829088;padding:13px}.report-footer{border-top:1px solid #e2eae6;margin-top:25px;padding-top:13px;color:#84918b;font-size:9px}.report-footer strong{color:#0f766e}.keep-together{break-inside:avoid}@media screen and (max-width:640px){body{padding:0}.hero{padding:23px 19px}.content{padding:20px 15px}.metrics{border-spacing:4px 0}.metric{padding:9px;height:72px}.metric-value{font-size:16px}.data-table{font-size:9px}.data-table th,.data-table td{padding:6px 5px}}
  </style></head><body><div class="page"><header class="hero"><div class="brand">TenantFlow · Property management</div><h1>${escapeHtml(report.title)}</h1><p class="subtitle">${escapeHtml(report.subtitle || '')}</p><div class="prepared">Prepared for ${escapeHtml(report.ownerName || 'Property owner')} · ${escapeHtml(generated)} EAT</div></header><main class="content"><p class="intro">${escapeHtml(report.intro || 'A clear snapshot of the latest information recorded in your workspace.')}</p><table role="presentation" class="metrics"><tbody>${metrics.join('')}</tbody></table>${sections}<footer class="report-footer"><strong>TenantFlow</strong> · Thoughtful property management · This report was generated from records saved in your workspace.</footer></main></div></body></html>`;
}

export async function createReportAttachment(report) {
  const html = renderReportHtml(report);
  const content = await withPdfPage(async page => {
    await page.setContent(html, { waitUntil: 'load' });
    return page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  });
  const date = new Date(report.generatedAt || new Date()).toISOString().slice(0, 10);
  const filename = `${report.filePrefix || 'tenantflow-report'}-${date}.pdf`;
  return { html, attachment: { filename, content: Buffer.from(content), contentType: 'application/pdf' } };
}
