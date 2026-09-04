import { Router } from 'express';
import { publicStats,stats,users,donations,requests,toggleUser,removeDonation } from '../controllers/adminController.js';
import { protect,authorize } from '../middleware/auth.js';
const r=Router();r.get('/public-stats',publicStats);r.use(protect,authorize('ADMIN'));r.get('/stats',stats);r.get('/users',users);r.get('/donations',donations);r.get('/requests',requests);r.patch('/users/:id/toggle',toggleUser);r.delete('/donations/:id',removeDonation);export default r;
