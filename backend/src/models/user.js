import { DataTypes } from 'sequelize';
export default (sequelize) => {
  const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password_hash: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM('farmer','vendor','logistics','service_provider'), allowNull: false }
  }, { tableName: 'users', timestamps: true });
  return User;
};
