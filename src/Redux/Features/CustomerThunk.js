// customerThunks.js
import {
  listStart,
  listSuccess,
  listFailure,
  interactionsStart,
  interactionsSuccess,
  interactionsFailure,
  profileStart,
  profileSuccess,
  profileFailure,
} from "./CustomerSlice";
import api from "../../services/customerData"; // Import your API functions
import Cookies from "js-cookie";

//Fetch Customer List
export const fetchCustomerList = () => async (dispatch) => {
  const token = Cookies.get("token");
  // dispatch(listStart());
  try {
    const customerList = await api.list(token);
    dispatch(listSuccess(customerList.data));
  } catch (error) {
    dispatch(listFailure(error.message));
  }
};

//FetchProfile
export const fetchCustomerProfile = (id) => async (dispatch) => {
  const token = Cookies.get("token");
  // dispatch(profileStart());
  try {
    const customerProfile = await api.ViewProfile(id, token);
    dispatch(profileSuccess(customerProfile.data));
  } catch (error) {
    dispatch(profileFailure(error.message));
    console.log(error);
  }
};

//Fetch Customer's Tickets
export const fetchCustomerInteractions = (credentials) => async (dispatch) => {
  dispatch(interactionsStart());
  try {
    const interactions = await api.interactions(credentials);
    dispatch(interactionsSuccess(interactions));
  } catch (error) {
    dispatch(interactionsFailure(error.message));
  }
};
