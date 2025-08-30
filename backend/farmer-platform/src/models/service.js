import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const Service = sequelize.define('Service', {
    service_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    provider_id: { type: DataTypes.INTEGER, allowNull: false },
    service_type: { type: DataTypes.ENUM('tractor_rental','pesticides','irrigation','labour','others'), allowNull: false },
    description: { type: DataTypes.TEXT },
    pricing_model: { type: DataTypes.ENUM('per_hour','per_day','fixed'), allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    availability_status: { type: DataTypes.STRING }
  }, { tableName: 'services', timestamps: true });
  return Service;
};
