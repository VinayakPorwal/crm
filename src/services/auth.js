import api from "./apiConfig";

export default {
  signUp: function (credentials) {
    return api.post("/auth/signup", credentials);
  },
  verifyOTP: function (credentials) {
    return api.post("/auth/verify", credentials);
  },
  login: function (credentials) {
    return api.post("/auth/login", credentials);
  },
  verifyUser: function (token) {
    return api.post("/auth/getUser", token, {
      headers: {
        authorization: token,
        // other headers if needed
      },
    });
  },
};
