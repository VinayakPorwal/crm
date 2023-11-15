import api from "./apiConfig";

export default {
  signUp: function (credentials) {
    return api.post("/auth/signup", credentials);
  },
  verifyOTP: function (credentials) {
    return api.post("/auth/verify", credentials, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  login: function (credentials) {
    return api.post(
      "/auth/login",
      // { body: JSON.stringify(credentials) },
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  },
  verifyUser: function (token) {
    return api.post("/auth/getUser", token, {
      headers: {
        authorization: token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",

        // other headers if needed
      },
    });
  },
};
