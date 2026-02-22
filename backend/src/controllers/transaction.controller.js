import { Transaction } from '../models/index.js';

export const createTransaction = async (req, res) => {
  try {
    const body = req.body;
    const tx = await Transaction.create({
      buyer_id: body.buyer_id,
      seller_id: body.seller_id,
      item_type: body.item_type,
      item_id: body.item_id,
      amount: body.amount,
      payment_status: body.payment_status || 'pending'
    });
    res.status(201).json(tx);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const listTransactions = async (req, res) => {
  try {
    const txs = await Transaction.findAll();
    res.json(txs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
