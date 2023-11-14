import api from "./apiConfig";

export default {
  signUp: function (credentials) {
    return api.post("/auth/signup", credentials);
  },
  verifyOTP: function (credentials) {
    return api.post(
      "/auth/verify",
      { body: JSON.stringify(credentials) },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  login: function (credentials) {
    return api.post(
      "/auth/login",
      { body: JSON.stringify(credentials) },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  verifyUser: function (token) {
    return api.post("/auth/getUser", token, {
      headers: {
        authorization: token,
        "Content-Type": "application/json",
        // other headers if needed
      },
    });
  },
};
