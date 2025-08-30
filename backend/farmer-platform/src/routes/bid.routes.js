import { Router } from 'express';
import { auth, requireRole } from '../middlewares/auth.js';
import { placeBid, bidsForCrop, updateBidStatus } from '../controllers/bid.controller.js';
const router = Router();
router.post('/', auth, requireRole('vendor'), placeBid);
router.get('/crop/:crop_id', bidsForCrop);
router.put('/:id', auth, updateBidStatus);
export default router;
