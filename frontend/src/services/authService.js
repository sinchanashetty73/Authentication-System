import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

// Register
export const registerUser = async (userData) => {
  return API.post("/register", userData);
};

// Login
export const loginUser = async (userData) => {
  return API.post("/login", userData);
};

// Dashboard
export const getDashboard = async () => {
  const token = localStorage.getItem("token");

  return API.get("/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};