import api from "./apiConfig";

export default {
  all: function (token) {
    return api.get("/ticket/all", {
      headers: {
        authorization: token,
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  add: function (data, token) {
    return api.post("/ticket/add", data, {
      headers: {
        authorization: token,
        "Access-Control-Allow-Origin": "*",
      },
    });
  },

  update: function (data, token) {
    return api.put("/ticket/update", data, {
      headers: {
        authorization: token,
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  customer: function (id, token) {
    return api.get("/ticket/Customer/" + id, {
      headers: {
        authorization: token,
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  admin: function (id, token) {
    return api.get("/ticket/Admin/" + id, {
      headers: {
        authorization: token,
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
