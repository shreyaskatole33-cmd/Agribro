import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const LogisticsProvider = sequelize.define('LogisticsProvider', {
    provider_id: { type: DataTypes.INTEGER, primaryKey: true },
    vehicle_type: { type: DataTypes.STRING },
    capacity: { type: DataTypes.FLOAT },
    service_area: { type: DataTypes.STRING },
    pricing_per_km: { type: DataTypes.FLOAT },
    availability_status: { type: DataTypes.STRING }
  }, { tableName: 'logistics_providers', timestamps: true });
  return LogisticsProvider;
};
