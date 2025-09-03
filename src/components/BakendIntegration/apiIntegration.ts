import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://18.188.87.230:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
