import { Router } from 'express';
import { listDonations,getDonation,createDonation,updateDonation,deleteDonation,myDonations,updateStatus } from '../controllers/donationController.js';
import { protect,authorize } from '../middleware/auth.js';
const r=Router();r.get('/',listDonations);r.get('/mine',protect,authorize('DONOR','ADMIN'),myDonations);r.get('/:id',getDonation);r.post('/',protect,authorize('DONOR'),createDonation);r.put('/:id',protect,authorize('DONOR'),updateDonation);r.delete('/:id',protect,authorize('DONOR'),deleteDonation);r.patch('/:id/status',protect,authorize('DONOR','ADMIN'),updateStatus);export default r;
