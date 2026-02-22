import { Crop, User } from '../models/index.js';

export const createCrop = async (req, res) => {
  try {
    const body = req.body;
    const crop = await Crop.create({
      farmer_id: req.user.id,
      crop_name: body.crop_name,
      variety: body.variety,
      quantity: body.quantity,
      unit_price: body.unit_price,
      harvest_date: body.harvest_date,
      description: body.description
    });
    res.status(201).json(crop);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const listCrops = async (req, res) => {
  try {
    const crops = await Crop.findAll({ include: [{ model: User, as: 'farmer', attributes: ['user_id','name'] }] });
    res.json(crops);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getCrop = async (req, res) => {
  try {
    const crop = await Crop.findByPk(req.params.id);
    if (!crop) return res.status(404).json({ error: 'Not found' });
    res.json(crop);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findByPk(req.params.id);
    if (!crop) return res.status(404).json({ error: 'Not found' });
    if (crop.farmer_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
    await crop.update(req.body);
    res.json(crop);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findByPk(req.params.id);
    if (!crop) return res.status(404).json({ error: 'Not found' });
    if (crop.farmer_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
    await crop.destroy();
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
