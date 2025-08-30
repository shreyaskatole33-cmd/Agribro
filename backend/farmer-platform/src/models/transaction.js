import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const Transaction = sequelize.define('Transaction', {
    transaction_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    buyer_id: { type: DataTypes.INTEGER, allowNull: false },
    seller_id: { type: DataTypes.INTEGER, allowNull: false },
    item_type: { type: DataTypes.ENUM('crop','service','logistics'), allowNull: false },
    item_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    payment_status: { type: DataTypes.ENUM('pending','paid','failed'), defaultValue: 'pending' }
  }, { tableName: 'transactions', timestamps: true });
  return Transaction;
};
