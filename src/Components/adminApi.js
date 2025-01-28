import axios from "axios";

export const fetchAdminDashboard = async (token) => {
  try {
    const response = await axios.get("http://localhost:4000/api/admin/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
