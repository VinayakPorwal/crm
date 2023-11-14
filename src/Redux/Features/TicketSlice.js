// ticketSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [], // Store the list of tickets
  // customerTickets: [], // Store the list of customer tickets
  loading: false, // To track API loading state
  error: null, // To store error messages
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    ticketStart: (state) => {
      state.loading = true;
    },
    ticketListSuccess: (state, action) => {
      state.loading = false;
      state.tickets = action.payload;
      state.error = null;
    },
    ticketFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    ticketAddSuccess: (state) => {
      state.loading = false;
      // state.tickets.push(action.payload);
      state.error = null;
    },

    ticketUpdateSuccess: (state, action) => {
      state.loading = false;
      // You can handle the updated ticket data here
      const updatedTicket = action.payload;
      state.tickets = state.tickets.map((ticket) =>
        ticket._id === updatedTicket._id
          ? { ...ticket, status: updatedTicket.status }
          : ticket
      );
    },
  },
});

export const {
  ticketStart,
  ticketFailure,
  ticketListSuccess,
  ticketAddSuccess,
  ticketUpdateSuccess,
} = ticketSlice.actions;

export default ticketSlice.reducer;
