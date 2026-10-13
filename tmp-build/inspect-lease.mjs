import puppeteer from 'puppeteer';
import { readFile } from 'node:fs/promises';
const pdfPath = 'C:/Users/vanad/Desktop/Tenant Management Agent/server/storage/contracts/layout-preview-en.pdf';
const pdf = await readFile(pdfPath, 'latin1');
console.log('PDF page objects:', (pdf.match(/\/Type\s*\/Page\b/g) || []).length);
const browser = await puppeteer.launch({headless:true,args:['--no-sandbox','--disable-setuid-sandbox']});
try {
 const page = await browser.newPage();
 await page.setViewport({width:1050,height:1485});
 await page.goto('file:///' + pdfPath, {waitUntil:'networkidle0'});
 await new Promise(r=>setTimeout(r,1500));
 await page.screenshot({path:'C:/Users/vanad/Desktop/Tenant Management Agent/tmp-build/lease-preview.png'});
} finally { await browser.close(); }
