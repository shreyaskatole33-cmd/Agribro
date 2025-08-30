import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { createTransaction, listTransactions } from '../controllers/transaction.controller.js';
const router = Router();
router.get('/', auth, listTransactions);
router.post('/', auth, createTransaction);
export default router;
