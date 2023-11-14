// authThunks.js
import {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  setUser,
  logoutUser,
  getUserSuccess,
  authFail,
} from "./AuthSlice";
import { customerLogout } from "./CustomerSlice";
import api from "../../services/auth"; // Import your API functions
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const user = await api.login(credentials);
    //TOKEN in Cookies Instead Session Store
    Cookies.set("token", user.data.token, {
      expires: 1,
      secure: true,
    });
    dispatch(loginSuccess(user.data.token));
  } catch (error) {
    dispatch(loginFailure(error.response.data.msg));
  }
};

export const signupUser = (userData) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const user = await api.signUp(userData);
    sessionStorage.setItem("email", user.email);
    dispatch(signupSuccess());
  } catch (error) {
    dispatch(signupFailure(error.response.data.msg));
  }
};

export const verifyOTP = (email, otpCode) => async (dispatch) => {
  try {
    // Make an API request to verify the OTP
    await api.verifyOTP(email, otpCode);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => async (dispatch) => {
  const token = Cookies.get("token");
  if (!token) {
    // No token found, user is not authenticated
    dispatch(loginFailure("User is not authenticated"));
    return;
  }

  // Verify the token and get user data
  try {
    const user = await api.verifyUser(token);
    console.log(user.data.user);
    dispatch(getUserSuccess(user.data.user));
  } catch (error) {
    dispatch(loginFailure("Authentication failed" + error.response.data.error));
  }
};

//
export const checkAuth = () => async (dispatch) => {
  const token = Cookies.get("token");
  if (!token) {
    // No token found, user is not authenticated
    console.log("not found");
    dispatch(authFail());
    return;
  }
  // Decode the JWT
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded JWT:", decoded);
    dispatch(setUser(decoded));
  } catch (error) {
    console.error("JWT verification failed:", error.message);
  }
};

//logout
export const logout = () => async (dispatch) => {
  try {
    // Clear the authentication token from the cookie
    Cookies.remove("token");

    // Dispatch the logout action to update the state
    dispatch(logoutUser());
    dispatch(customerLogout());
  } catch (error) {
    // Handle any errors that may occur during logout
    console.error("Error during logout:", error);
  }
};
