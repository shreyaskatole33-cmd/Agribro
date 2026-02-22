import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const LogisticsRequest = sequelize.define('LogisticsRequest', {
    logistics_request_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    crop_id: { type: DataTypes.INTEGER, allowNull: false },
    farmer_id: { type: DataTypes.INTEGER, allowNull: false },
    vendor_id: { type: DataTypes.INTEGER, allowNull: false },
    pickup_location: { type: DataTypes.STRING, allowNull: false },
    drop_location: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.FLOAT, allowNull: false },
    preferred_date: { type: DataTypes.DATE },
    status: { type: DataTypes.ENUM('pending','in_progress','completed','cancelled'), defaultValue: 'pending' }
  }, { tableName: 'logistics_requests', timestamps: true });
  return LogisticsRequest;
};
