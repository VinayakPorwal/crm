const express = require("express");
const authMiddleware = require("../middlewares/verifyUser");
const router = express.Router();
const customerHandler = require("../controllers/customerHandler");
const verifyUserRole = require("../middlewares/verifyRole");

router.get(
  "/profile/:userId",
  authMiddleware,
  // verifyUserRole("admin"),
  customerHandler.customerProfile
);
router.get(
  "/list",
  authMiddleware,
  verifyUserRole("admin"),
  customerHandler.customerList
);

module.exports = router;
