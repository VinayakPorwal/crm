const User = require("../models/User");
const Ticket = require("../models/Interaction");

// Route to fetch a user's tickets
const addTicket = async (req, res) => {
  try {
    const { title, description, customerId, adminId, customerEmail } = req.body;
    if (customerEmail !== "") {
      const Customer = await User.findOne({ email: customerEmail });
      console.log(Customer, customerEmail);
      // Create a new ticket instance
      const ticket = new Ticket({
        title,
        description,
        customerId: Customer._id,
        adminId,
        ipAddress: req.ip || req.connection.remoteAddress,
      });

      // Save the ticket to the database
      await ticket.save();
      res
        .status(201)
        .json({ success: true, message: "Ticket added successfully", ticket });
    } else {
      // Create a new ticket instance
      const ticket = new Ticket({
        title,
        description,
        customerId,
        adminId,
        ipAddress: req.ip || req.connection.remoteAddress,
      });

      // Save the ticket to the database
      await ticket.save();
      res
        .status(201)
        .json({ success: true, message: "Ticket added successfully", ticket });
    }
  } catch (error) {
    console.error("Error adding a ticket:", error);
    res.status(500).json({ success: false, message: "Failed to add a ticket" });
  }
};

// Function to get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate({
        path: "adminId",
        select: "-password", // Exclude the "password" field
      })
      .populate({
        path: "customerId",
        select: "-password", // Exclude the "password" field
      }); // Retrieve all tickets

    res.status(200).json({ success: true, tickets });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch tickets" });
  }
};

// Function to update the status of a ticket
const updateTicketStatus = async (req, res) => {
  try {
    const { ticketId, newStatus } = req.body;
    console.log(req.body);

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });
    }

    // Update the status of the ticket
    ticket.status = newStatus;
    const updated = await ticket.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Ticket status updated successfully",
        updated,
      });
  } catch (error) {
    console.error("Error updating ticket status:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update ticket status" });
  }
};

// Define a function to get tickets for a specific customer by their ID
const getTicketsForCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    // Use Mongoose to find all tickets with the specified customerId
    const tickets = await Ticket.find({ customerId: customerId })
      .populate({
        path: "adminId",
        select: "-password", // Exclude the "password" field
      })
      .populate({
        path: "customerId",
        select: "-password", // Exclude the "password" field
      }); // Retrieve all tickets;

    res.status(200).json({ success: true, tickets });
  } catch (error) {
    console.error("Error getting tickets for customer:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch tickets" });
  }
};

// Define a function to get tickets for a specific admin by their ID
const getTicketsForAdmin = async (req, res) => {
  const adminId = req.params.id;
  console.log(adminId);
  try {
    // Use Mongoose to find all tickets with the specified customerId
    const tickets = await Ticket.find({ adminId: adminId });

    res.status(200).json({ success: true, tickets });
  } catch (error) {
    console.error("Error getting tickets for customer:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch tickets" });
  }
};

module.exports = {
  getAllTickets,
  updateTicketStatus,
  addTicket,
  getTicketsForCustomer,
  getTicketsForAdmin,
};
