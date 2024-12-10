import apiClient from "./api";

export const apiRequest = async (method, url, data = {}, params = {}) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
    });
    return response.data; // Return the response data
  } catch (error) {
    // Handle errors gracefully
    if (error.response) {
      // Server responded with a status other than 200 range
      throw new Error(error.response.data.message || "An error occurred");
    } else {
      // Network error or request was not made
      throw new Error("Network error. Please try again.");
    }
  }
};
