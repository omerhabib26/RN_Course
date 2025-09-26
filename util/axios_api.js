import axios from "axios";

// Firebase Identity Toolkit base URL
const api = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
});

export const API_KEY = "?key=AIzaSyCbjQvBCMkjIRxDMNdHtNfFW06Ow6RCt0g";

// Optional: request/response logging
api.interceptors.request.use((config) => {
  console.log(
    "📤 Request:",
    config.method?.toUpperCase(),
    config.url,
    config.data
  );
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("📥 Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("❌ Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
