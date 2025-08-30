import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const ServiceRequest = sequelize.define('ServiceRequest', {
    request_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    farmer_id: { type: DataTypes.INTEGER, allowNull: false },
    service_id: { type: DataTypes.INTEGER, allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE },
    status: { type: DataTypes.ENUM('pending','accepted','completed','cancelled'), defaultValue: 'pending' }
  }, { tableName: 'service_requests', timestamps: true });
  return ServiceRequest;
};
