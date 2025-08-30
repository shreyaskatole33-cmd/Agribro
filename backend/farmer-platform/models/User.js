const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  role: String, // 'farmer', 'buyer', 'manufacturer'
  location: String,
  kycVerified: Boolean,
  email: String,
  password: String, // For now, store as plain text (in production use bcrypt)
});

module.exports = mongoose.model("User", UserSchema);
