import 'dotenv/config';import app from './app.js';import './jobs/reminderJob.js';const port=Number(process.env.PORT)||4000;app.listen(port,()=>console.log(`Tenant Manager API listening on ${port}`));
