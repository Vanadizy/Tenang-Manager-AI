import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { randomUUID } from 'node:crypto';

import auth from './routes/auth.js';
import api from './routes/api.js';
import settings from './routes/settings.js';
import onboarding from './routes/onboarding.js';
import assistant from './routes/assistant.js';

const app = express();

app.use((req, res, next) => {
  req.requestId = randomUUID();
  res.setHeader('X-Request-Id', req.requestId);
  next();
});

app.use(
  (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type,X-App-Language');
    res.setHeader('Access-Control-Expose-Headers', 'X-Request-Id');
    res.setHeader('Access-Control-Max-Age', '600');

    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  },
);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  }),
);

app.use(express.json({ limit: '1mb' }));

app.use(
  '/api/auth',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
  }),
  auth,
);

app.use('/api/settings', settings);
app.use('/api/onboarding', onboarding);
app.use('/api/assistant', assistant);
app.use('/api', api);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'tenant-manager-api' });
});

app.use((err, req, res, next) => {
  console.error('[api error]', req.requestId, req.method, req.originalUrl, err);

  if (res.headersSent) {
    return next(err);
  }

  const status =
    err.status ||
    (err.code === 'P2025'
      ? 404
      : err.code === 'P2002'
        ? 409
        : err.name === 'ZodError'
          ? 400
          : 500);

  let message = 'We could not complete that action. Please try again.';

  if (status === 400) {
    message = 'Some information is missing or invalid. Check the fields and try again.';
  } else if (status === 404) {
    message = 'This record may have been removed. Refresh the list and try again.';
  } else if (status === 409) {
    message = 'This information is already in use. Check the record and try again.';
  }

  res.status(status).json({ error: message, requestId: req.requestId });
});

export default app;
