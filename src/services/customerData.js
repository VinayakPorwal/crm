import api from "./apiConfig";

export default {
  list: function (token) {
    return api.get("/customer/list", {
      headers: {
        authorization: token,
        // other headers if needed
      },
    });
  },
  interactions: function (credentials) {
    return api.post("/customer/interactions", credentials);
  },

  ViewProfile: function (id, token) {
    return api.get("/customer/profile/" + id, {
      headers: {
        authorization: token,
        // other headers if needed
      },
    });
  },
};
