import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://api.reicalculator.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
