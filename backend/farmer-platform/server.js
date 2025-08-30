// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Models (example: User)
const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  role: String, // farmer, buyer, manufacturer, etc.
  location: String,
  kycVerified: Boolean,
  email: String,
  password: String,
}));

// Routes

// Register a user
app.post("/api/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ success: true, user });
});

// Get all users
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Example: Fetching data from backend in React
app.get("/api/farmers", (req, res) => {
  // This is just an example. You would replace this with your actual data fetching logic.
  res.json([
    { id: 1, name: "Farmer John", location: "Location A" },
    { id: 2, name: "Farmer Jane", location: "Location B" },
  ]);
});

// Marketplace route placeholder
app.get("/api/marketplace", (req, res) => {
  res.json({ message: "Marketplace API under development" });
});

// Logistics route placeholder
app.get("/api/logistics", (req, res) => {
  res.json({ message: "Logistics API under development" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
