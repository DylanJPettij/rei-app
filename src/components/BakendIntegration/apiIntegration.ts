import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://api.reicalculator.net:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
