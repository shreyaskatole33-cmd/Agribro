import { Router } from 'express';
import { auth, requireRole } from '../middlewares/auth.js';
import { createService, listServices, requestService, listServiceRequests } from '../controllers/service.controller.js';
const router = Router();
router.get('/', listServices);
router.post('/', auth, requireRole('service_provider'), createService);
router.get('/requests', listServiceRequests);
router.post('/requests', auth, requireRole('farmer'), requestService);
export default router;
