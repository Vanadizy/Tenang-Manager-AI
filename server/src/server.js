import 'dotenv/config';
import app from './app.js';
import { prisma } from './config/prisma.js';
import { closePdfBrowser } from './services/pdfBrowser.js';
import './jobs/reminderJob.js';

const port = Number(process.env.PORT) || 4000;
const server = app.listen(port, () => console.log(`Tenant Manager API listening on ${port}`));
let shuttingDown = false;

async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`[server] ${signal} received; shutting down`);
  const timeout = setTimeout(() => process.exit(1), 10000);
  timeout.unref();
  server.close(async () => {
    await Promise.allSettled([closePdfBrowser(), prisma.$disconnect()]);
    clearTimeout(timeout);
    process.exit(0);
  });
}

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));
