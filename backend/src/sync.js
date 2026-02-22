import { sequelize } from './models/index.js';
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Database synchronized.');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
