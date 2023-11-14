import axios from "axios";

const api = axios.create({
  baseURL: "https://crm-client-iota.vercel.app/",
});

export default api;
