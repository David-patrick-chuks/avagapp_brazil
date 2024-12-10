import { apiRequest } from "./request";

// Login
export const loginUser = async (credentials) => {
  return apiRequest("POST", "auth/login", credentials);
};

// Logout
export const logoutUser = async () => {
  return apiRequest("POST", "auth/logout");
};

// Register
export const registerUser = async (userData) => {
  return apiRequest("POST", "auth/register", JSON.stringify(userData));
};

// Verify OTP
export const verifyOTP = async (otpData) => {
  return apiRequest("POST", "auth/verify-otp", otpData);
};

// Forgot Password
export const forgotPassword = async (emailData) => {
  return apiRequest("POST", "auth/forgot-password", emailData);
};

// Reset Password
export const resetPassword = async (passwordData) => {
  return apiRequest("POST", "auth/reset-password", passwordData);
};
