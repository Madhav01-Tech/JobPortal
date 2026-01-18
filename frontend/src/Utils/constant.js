// Use localhost for development, env for production (Vite)
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://jobportal-vhau.onrender.com";

export const User_API_Endpoint = `${API_BASE_URL}/api/v1/user`;
export const Jobs_API_Endpoint = `${API_BASE_URL}/api/v1/job`;
export const Company_API_Endpoint = `${API_BASE_URL}/api/v1/company`;
export const Application_API_Endpoint = `${API_BASE_URL}/api/v1/application`;
