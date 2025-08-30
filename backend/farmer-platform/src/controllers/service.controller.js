import { Service, ServiceRequest } from '../models/index.js';

export const createService = async (req, res) => {
  try {
    const body = req.body;
    const svc = await Service.create({
      provider_id: req.user.id,
      service_type: body.service_type,
      description: body.description,
      pricing_model: body.pricing_model,
      price: body.price,
      availability_status: body.availability_status || 'available'
    });
    res.status(201).json(svc);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const listServices = async (req, res) => {
  try {
    const svcs = await Service.findAll();
    res.json(svcs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const requestService = async (req, res) => {
  try {
    const body = req.body;
    const reqs = await ServiceRequest.create({
      farmer_id: req.user.id,
      service_id: body.service_id,
      start_date: body.start_date,
      end_date: body.end_date
    });
    res.status(201).json(reqs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const listServiceRequests = async (req, res) => {
  try {
    const reqs = await ServiceRequest.findAll();
    res.json(reqs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
