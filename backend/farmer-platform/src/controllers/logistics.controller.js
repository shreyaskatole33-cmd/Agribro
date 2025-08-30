import { LogisticsRequest } from '../models/index.js';

export const createLogisticsRequest = async (req, res) => {
  try {
    const body = req.body;
    const lr = await LogisticsRequest.create({
      crop_id: body.crop_id,
      farmer_id: body.farmer_id,
      vendor_id: body.vendor_id,
      pickup_location: body.pickup_location,
      drop_location: body.drop_location,
      quantity: body.quantity,
      preferred_date: body.preferred_date
    });
    res.status(201).json(lr);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const listLogisticsRequests = async (req, res) => {
  try {
    const lrs = await LogisticsRequest.findAll();
    res.json(lrs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateLogisticsStatus = async (req, res) => {
  try {
    const lr = await LogisticsRequest.findByPk(req.params.id);
    if (!lr) return res.status(404).json({ error: 'Not found' });
    await lr.update({ status: req.body.status });
    res.json(lr);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
