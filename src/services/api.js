import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Add `/auth/` to the base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable credentials for secure cookie handling
});

export default apiClient;
