import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketfood-api-v5ri.onrender.com",
});
