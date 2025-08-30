import { sequelize } from '../config/db.js';
import UserModel from './user.js';
import CropModel from './crop.js';
import BidModel from './bid.js';
import LogisticsRequestModel from './logisticsRequest.js';
import LogisticsProviderModel from './logisticsProvider.js';
import ServiceModel from './service.js';
import ServiceRequestModel from './serviceRequest.js';
import TransactionModel from './transaction.js';

export const User = UserModel(sequelize);
export const Crop = CropModel(sequelize);
export const Bid = BidModel(sequelize);
export const LogisticsRequest = LogisticsRequestModel(sequelize);
export const LogisticsProvider = LogisticsProviderModel(sequelize);
export const Service = ServiceModel(sequelize);
export const ServiceRequest = ServiceRequestModel(sequelize);
export const Transaction = TransactionModel(sequelize);

// Associations
User.hasMany(Crop, { foreignKey: 'farmer_id' });
Crop.belongsTo(User, { as: 'farmer', foreignKey: 'farmer_id' });

User.hasMany(Bid, { foreignKey: 'vendor_id' });
Bid.belongsTo(User, { as: 'vendor', foreignKey: 'vendor_id' });
Crop.hasMany(Bid, { foreignKey: 'crop_id' });
Bid.belongsTo(Crop, { foreignKey: 'crop_id' });

Crop.hasMany(LogisticsRequest, { foreignKey: 'crop_id' });
LogisticsRequest.belongsTo(Crop, { foreignKey: 'crop_id' });
User.hasMany(LogisticsRequest, { as: 'farmerLogistics', foreignKey: 'farmer_id' });
User.hasMany(LogisticsRequest, { as: 'vendorLogistics', foreignKey: 'vendor_id' });
LogisticsRequest.belongsTo(User, { as: 'farmer', foreignKey: 'farmer_id' });
LogisticsRequest.belongsTo(User, { as: 'vendor', foreignKey: 'vendor_id' });

User.hasOne(LogisticsProvider, { foreignKey: 'provider_id' });
LogisticsProvider.belongsTo(User, { as: 'provider', foreignKey: 'provider_id' });

User.hasMany(Service, { foreignKey: 'provider_id' });
Service.belongsTo(User, { as: 'provider', foreignKey: 'provider_id' });

User.hasMany(ServiceRequest, { foreignKey: 'farmer_id' });
ServiceRequest.belongsTo(User, { as: 'farmer', foreignKey: 'farmer_id' });
Service.hasMany(ServiceRequest, { foreignKey: 'service_id' });
ServiceRequest.belongsTo(Service, { foreignKey: 'service_id' });

User.hasMany(Transaction, { as: 'buyer', foreignKey: 'buyer_id' });
User.hasMany(Transaction, { as: 'seller', foreignKey: 'seller_id' });
Transaction.belongsTo(User, { as: 'buyer', foreignKey: 'buyer_id' });
Transaction.belongsTo(User, { as: 'seller', foreignKey: 'seller_id' });

export default {
  sequelize,
  User, Crop, Bid, LogisticsRequest, LogisticsProvider, Service, ServiceRequest, Transaction
};
