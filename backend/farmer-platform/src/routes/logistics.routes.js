import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { createLogisticsRequest, listLogisticsRequests, updateLogisticsStatus } from '../controllers/logistics.controller.js';
const router = Router();
router.get('/requests', listLogisticsRequests);
router.post('/requests', auth, createLogisticsRequest);
router.put('/requests/:id', auth, updateLogisticsStatus);
export default router;
