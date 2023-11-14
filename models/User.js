const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // You should consider encrypting the password
  },
  verify_token: {
    type: String,
    required: true,
  },
  token_expiry: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "customer"], // Define the allowed roles
    default: "customer", // Set a default role
  },
  // You can add more fields as needed
});

const User = mongoose.model("User", userSchema);

module.exports = User;
