import api from "./apiConfig";

export default {
  all: function (token) {
    return api.get("/ticket/all", {
      headers: {
        authorization: token,
      },
    });
  },
  add: function (data, token) {
    return api.post("/ticket/add", data, {
      headers: {
        authorization: token,
      },
    });
  },

  update: function (data, token) {
    return api.put("/ticket/update", data, {
      headers: {
        authorization: token,
      },
    });
  },
  customer: function (id, token) {
    return api.get("/ticket/Customer/" + id, {
      headers: {
        authorization: token,
      },
    });
  },
  admin: function (id, token) {
    return api.get("/ticket/Admin/" + id, {
      headers: {
        authorization: token,
      },
    });
  },
};
