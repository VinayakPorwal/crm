import {
  ticketStart,
  ticketFailure,
  ticketListSuccess,
  ticketAddSuccess,
  ticketUpdateSuccess,
} from "./TicketSlice";
import api from "../../services/ticket"; // Import your API functions for tickets
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
// Thunk to fetch a list of tickets
export const allTickets = () => async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(ticketStart());
  try {
    const response = await api.all(token);
    dispatch(ticketListSuccess(response.data.tickets));
  } catch (error) {
    dispatch(ticketFailure(error.message));
  }
};

// Thunk to add a new ticket
export const addTicket = (ticketData) => async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(ticketStart());
  try {
    const response = await api.add(ticketData, token);
    dispatch(ticketAddSuccess());
  } catch (error) {
    dispatch(ticketFailure(error.message));
  }
};

// Thunk to fetch a list of tickets for ADMIN
export const fetchAdminTickets = (id) => async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(ticketStart());
  try {
    const response = await api.admin(id, token);
    dispatch(ticketListSuccess(response.data));
  } catch (error) {
    dispatch(ticketFailure(error.message));
  }
};

// Thunk to fetch a list of tickets for Customer
export const fetchCustomerTickets = (id) => async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(ticketStart());
  try {
    const response = await api.customer(id, token);
    dispatch(ticketListSuccess(response.data.tickets));
  } catch (error) {
    dispatch(ticketFailure(error.message));
  }
  // var Tickets = useSelector((state) => state.ticket.tickets);
};

// Thunk to update a ticket
export const updateTicket = (ticketData) => async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(ticketStart());
  try {
    const response = await api.update(ticketData, token);
    dispatch(ticketUpdateSuccess(response.data.updated));
  } catch (error) {
    dispatch(ticketFailure(error.response.data.message));
  }
};
// You can create additional thunks for updating, deleting, or any other ticket-related actions as needed
