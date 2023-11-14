const User = require("../models/User");

// Route to fetch customers based on their role -- ADMIN only can access this
const customerList = async (req, res) => {
  try {
    // Find users with the "customer" role
    const customers = await User.find({ role: "customer" }).select("-password");

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Route to fetch a user's profile (restricted to admin users) -- Both only can access this
const customerProfile = async (req, res) => {
  try {
    const requestedUserId = req.params.userId;

    // Fetch the user's profile based on the requested user ID
    const user = await User.findById(requestedUserId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { customerList, customerProfile };
