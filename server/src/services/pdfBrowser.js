import puppeteer from 'puppeteer';

let browserPromise;
let activePages = 0;
const maxPdfPages = Math.max(1, Number(process.env.PDF_MAX_CONCURRENT_PAGES) || 1);
let pageQueue = Promise.resolve();

async function acquirePageSlot() {
  let release;
  const previous = pageQueue;
  pageQueue = new Promise(resolve => { release = resolve; });
  await previous;
  while (activePages >= maxPdfPages) {
    await new Promise(resolve => setTimeout(resolve, 25));
  }
  activePages += 1;
  return () => {
    activePages -= 1;
    release();
  };
}

export async function withPdfPage(render) {
  const releasePageSlot = await acquirePageSlot();
  try {
    if (!browserPromise) {
      browserPromise = puppeteer.launch({
        headless: true,
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
      }).catch(error => {
        browserPromise = undefined;
        throw error;
      });
    }

    const browser = await browserPromise;
    if (!browser.isConnected()) {
      browserPromise = undefined;
      browserPromise = puppeteer.launch({
        headless: true,
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
      }).catch(error => {
        browserPromise = undefined;
        throw error;
      });
    }

    const activeBrowser = await browserPromise;
    const page = await activeBrowser.newPage();
    try {
      return await render(page);
    } finally {
      await page.close();
    }
  } finally {
    releasePageSlot();
  }
}

export async function closePdfBrowser() {
  const pendingBrowser = browserPromise;
  browserPromise = undefined;
  if (!pendingBrowser) return;
  try {
    const browser = await pendingBrowser;
    if (browser.isConnected()) await browser.close();
  } catch (error) {
    console.error('[pdf browser shutdown]', error);
  }
}
