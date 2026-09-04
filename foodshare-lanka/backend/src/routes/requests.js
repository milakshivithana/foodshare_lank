import { Router } from 'express';
import { createRequest,myRequests,donorRequests,donationRequests,updateRequestStatus,deleteRequest } from '../controllers/requestController.js';
import { protect,authorize } from '../middleware/auth.js';
const r=Router();r.post('/',protect,authorize('RECIPIENT'),createRequest);r.get('/my',protect,authorize('RECIPIENT'),myRequests);r.get('/donor/my',protect,authorize('DONOR'),donorRequests);r.get('/donation/:donationId',protect,authorize('DONOR','ADMIN'),donationRequests);r.patch('/:id/status',protect,authorize('DONOR','RECIPIENT','ADMIN'),updateRequestStatus);r.delete('/:id',protect,authorize('RECIPIENT'),deleteRequest);export default r;
