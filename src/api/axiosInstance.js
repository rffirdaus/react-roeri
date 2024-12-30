import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Example API URL
  timeout: 10000, // 10 seconds timeout
});

export default axiosInstance;