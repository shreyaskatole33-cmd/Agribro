import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const Bid = sequelize.define('Bid', {
    bid_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    crop_id: { type: DataTypes.INTEGER, allowNull: false },
    vendor_id: { type: DataTypes.INTEGER, allowNull: false },
    bid_amount: { type: DataTypes.FLOAT, allowNull: false },
    quantity_requested: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.ENUM('pending','accepted','rejected'), defaultValue: 'pending' }
  }, { tableName: 'bids', timestamps: true });
  return Bid;
};
