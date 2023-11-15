const jwt = require("jsonwebtoken");
const mailer = require("../config/nodemailerConfig");
const User = require("../models/User");
const { generateOTP } = require("../utils/createToken");

const signUp = async (req, res) => {
  try {
    const { name, email, password, secretKey } = req.body;
    const userRole = secretKey.length > 0 ? "admin" : "customer";

    if (userRole === "admin" && secretKey !== "yourAdminSecretKey") {
      return res.status(401).json({
        success: false,
        msg: "Invalid secret key for admin registration",
      });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, msg: "Email address already exists." });
    }

    // Generate OTP
    const OTP = generateOTP();

    // Create a new user with "Inactive" status
    const newUser = new User({
      name,
      email,
      password,
      verify_token: OTP,
      token_expiry: new Date(Date.now() + 5 * 60 * 1000), // OTP valid for 5 minutes
      status: "Inactive",
      role: userRole,
    });

    // Save the user to the database
    await newUser.save();

    // Define email subject and message based on the user's role
    let emailSubject = "CRM Customer OTP Verification";
    let emailMessage = `Thank you for using our service as a ${userRole}.`;

    if (userRole === "admin") {
      emailSubject = "CRM Customer OTP Verification";
    }

    // Send an email with the OTP
    const mailOptions = {
      from: "crmServer@gmail.com", // Update with your email
      to: email,
      subject: emailSubject,
      html: `
        <h4><strong>Dear ${name},</strong></h4>
        <p>Your OTP for ${userRole} verification is <strong>${OTP}</strong>. This OTP is valid for 5 minutes.
        ${emailMessage}
        Best regards,
        Team CRM`,
    };

    await mailer.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      email: email,
      msg: "Verify OTP sent to your email to activate your account.",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Server-side error" + error });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({
      email,
      token_expiry: { $gte: new Date() },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "Email address does not exist or OTP has expired.",
      });
    }

    if (user.verify_token !== otp) {
      return res.status(401).json({ success: false, msg: "Invalid OTP." });
    }

    user.status = "Active";
    await user.save();

    return res
      .status(201)
      .json({ success: true, msg: "Sign Up and verification successful." });
  } catch (error) {
    // Error handling code
  }
};

const login = async (req, res) => {
  try {
    // Verify user's credentials and obtain their role
    const { email, password } = req.body;
    const user = await User.findOne({ email, status: "Active" });

    if (!user || user.password !== password) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid credentials." });
    }

    // Now you have the user's role
    const userRole = user.role;

    if (userRole === "admin") {
      // Handle admin-specific actions
      // For example, provide access to admin-related features
    } else if (userRole === "customer") {
      // Handle customer-specific actions
      // For example, provide access to customer-related features
    }

    const payload = { name: user.name, id: user._id, role: userRole };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .json({ success: true, msg: "Login successful", name: user.name, token });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Server-side error" + error });
  }
};

const getUser = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ success: true, msg: "User Verified", user: req.user });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Server-side error" + error });
  }
};

module.exports = { signUp, verifyOTP, login, getUser };
