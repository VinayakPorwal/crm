// customerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerList: [], // Store the list of customers
  customerInteractions: [], // Store customer interactions
  customerProfile: null, // Store customer profile
  loading: false, // To track API loading state
  error: null, // To store error messages
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    listStart: (state) => {
      state.loading = true;
    },
    listSuccess: (state, action) => {
      state.loading = false;
      state.customerList = action.payload;
      state.error = null;
    },
    listFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    interactionsStart: (state) => {
      state.loading = true;
    },
    interactionsSuccess: (state, action) => {
      state.loading = false;
      state.customerInteractions = action.payload;
      state.error = null;
    },
    interactionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    profileStart: (state) => {
      state.loading = true;
    },
    profileSuccess: (state, action) => {
      state.loading = false;
      state.customerProfile = action.payload;
      state.error = null;
    },
    profileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    customerLogout: (state) => {
      state.customerList = [];
      state.customerInteractions = [];
      state.customerProfile = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  listStart,
  listSuccess,
  listFailure,
  interactionsStart,
  interactionsSuccess,
  interactionsFailure,
  profileStart,
  profileSuccess,
  profileFailure,
  customerLogout,
} = customerSlice.actions;

export default customerSlice.reducer;
