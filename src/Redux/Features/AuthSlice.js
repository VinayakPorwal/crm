// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // User data when logged in
  isAuthenticated: false, // Boolean to track if the user is authenticated
  loading: false, // To track API loading state
  error: null, // To store error messages
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    authFail: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    },
    signupStart: (state) => {
      state.loading = true;
    },
    signupSuccess: (state) => {
      state.loading = false;
      // You can set other state values as needed for signup success
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  verifyOTP,
  setUser,
  logoutUser,
  getUserSuccess,
  authFail,
} = authSlice.actions;

export default authSlice.reducer;
