import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/simple/price",
});

export default api;
