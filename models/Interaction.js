const mongoose = require("mongoose");
// interactions Collection Schema
const interactionSchema = new mongoose.Schema({
  title: String, // Title or subject of the interaction
  description: String, // Description or details of the interaction
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the customer (User) associated with the interaction
    required: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the admin (User) who initiated the interaction
  },
  status: { type: String, default: "Open" },
  initiateDate: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  }, // Date and time when the interaction was initiated
  ipAddress: String, // IP address of the interaction
  initiatedBy: String, // User or admin who initiated the interaction
});

// Create the "Interaction" model
const Ticket = mongoose.model("Interaction", interactionSchema);

module.exports = Ticket;
