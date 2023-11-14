const express = require("express");
const router = express.Router();
const authHandler = require("../controllers/authHandler");
const authMiddleware = require("../middlewares/verifyUser");
router.post("/signup", authHandler.signUp);
router.post("/verify", authHandler.verifyOTP);
router.post("/login", authHandler.login);
router.post("/getUser", authMiddleware, authHandler.getUser);

module.exports = router;
