const verifyUserRole = (requiredRole) => (req, res, next) => {
  console.log("Middleware running : VerifyRole", req.user);

  // Check if the user's role matches the required role
  if (req.user && req.user.role === requiredRole) {
    next(); // User has the required role, continue to the next middleware or route
  } else {
    res.status(403).json({ error: "Forbidden" }); // User does not have the required role
  }
};

module.exports = verifyUserRole;
