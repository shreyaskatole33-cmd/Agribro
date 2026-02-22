import { Bid, Crop } from '../models/index.js';

export const placeBid = async (req, res) => {
  try {
    const { crop_id, bid_amount, quantity_requested } = req.body;
    const crop = await Crop.findByPk(crop_id);
    if (!crop || crop.status !== 'open') return res.status(400).json({ error: 'Invalid crop' });
    const bid = await Bid.create({
      crop_id,
      vendor_id: req.user.id,
      bid_amount,
      quantity_requested
    });
    res.status(201).json(bid);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const bidsForCrop = async (req, res) => {
  try {
    const bids = await Bid.findAll({ where: { crop_id: req.params.crop_id } });
    res.json(bids);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateBidStatus = async (req, res) => {
  try {
    const bid = await Bid.findByPk(req.params.id);
    if (!bid) return res.status(404).json({ error: 'Not found' });
    await bid.update({ status: req.body.status });
    res.json(bid);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
