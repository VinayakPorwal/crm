import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/AuthSlice";
import customerReducer from "./Features/CustomerSlice";
import ticketReducer from "./Features/TicketSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    ticket: ticketReducer,
  },
});
