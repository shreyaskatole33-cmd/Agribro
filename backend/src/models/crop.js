import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const Crop = sequelize.define('Crop', {
    crop_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    farmer_id: { type: DataTypes.INTEGER, allowNull: false },
    crop_name: { type: DataTypes.STRING, allowNull: false },
    variety: { type: DataTypes.STRING },
    quantity: { type: DataTypes.FLOAT, allowNull: false },
    unit_price: { type: DataTypes.FLOAT },
    harvest_date: { type: DataTypes.DATE },
    listing_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.ENUM('open','sold','closed'), defaultValue: 'open' },
    description: { type: DataTypes.TEXT }
  }, { tableName: 'crops', timestamps: true });
  return Crop;
};
