const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  console.log("Middleware running : VerifyUser");

  if (!tokenHeader) {
    return res.status(401).json({ error: "Unauthorized: Token missing" });
  }

  try {
    const decoded = jwt.verify(tokenHeader, process.env.JWT_SECRET);
    // const user = await User.findById(decoded.id).select("-password");
    // if (!user) {
    //   return res.status(401).json({ error: "Unauthorized: User not found" });
    // }

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    res.status(401).json({ error: "Unauthorized: Token validation failed" });
  }
};

module.exports = authMiddleware;
