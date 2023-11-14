const express = require("express");
const authMiddleware = require("../middlewares/verifyUser");
const router = express.Router();
const ticketController = require("../controllers/ticketHandler");
const verifyUserRole = require("../middlewares/verifyRole");

// Endpoint to add all tickets
router.post("/add", authMiddleware, ticketController.addTicket);

// Endpoint to update the status of a ticket
router.put("/update", authMiddleware, ticketController.updateTicketStatus);

// Endpoint to get all tickets
router.get(
  "/all",
  authMiddleware,
  verifyUserRole("admin"),
  ticketController.getAllTickets
);

// Endpoint to get all tickets
router.get(
  "/Customer/:id",
  authMiddleware,
  ticketController.getTicketsForCustomer
);

// Endpoint to get all tickets
router.get("/Admin/:id", authMiddleware, ticketController.getTicketsForAdmin);

module.exports = router;
