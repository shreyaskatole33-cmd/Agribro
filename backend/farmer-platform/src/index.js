import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';

import authRoutes from './routes/auth.routes.js';
import cropRoutes from './routes/crop.routes.js';
import bidRoutes from './routes/bid.routes.js';
import logisticsRoutes from './routes/logistics.routes.js';
import serviceRoutes from './routes/service.routes.js';
import transactionRoutes from './routes/transaction.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ ok: true, name: 'Agri Market API' }));

app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/transactions', transactionRoutes);

// Initialize DB and start server
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  } catch (e) {
    console.error('Failed to start', e);
    process.exit(1);
  }
};

start();
