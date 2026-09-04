import 'express-async-errors';
import dotenv from 'dotenv'; dotenv.config();
import express from 'express'; import cors from 'cors'; import morgan from 'morgan';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js'; import donationRoutes from './routes/donations.js'; import requestRoutes from './routes/requests.js'; import adminRoutes from './routes/admin.js';
import { notFound, errorHandler } from './middleware/error.js';

const app = express();
const allowed = (process.env.CLIENT_URL || 'http://localhost:5173').split(',').map(x => x.trim());
app.use(cors({ origin: (origin, cb) => { if (!origin || allowed.includes(origin) || allowed.includes('*')) return cb(null, true); cb(new Error('CORS origin not allowed')); } }));
app.use(express.json({ limit: '1mb' })); app.use(morgan('dev'));
app.get('/api/health', (_req, res) => res.json({ success: true, status: 'ok', service: 'FoodShare Lanka API', time: new Date().toISOString() }));
app.use('/api/auth', authRoutes); app.use('/api/donations', donationRoutes); app.use('/api/requests', requestRoutes); app.use('/api/admin', adminRoutes);
app.use(notFound); app.use(errorHandler);
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') connectDB().then(() => app.listen(port, () => console.log(`API running on port ${port}`))).catch(err => { console.error(err); process.exit(1); });
export default app;
// env reloaded
