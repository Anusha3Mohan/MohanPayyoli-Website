import React, { useEffect } from "react";
import { fetchAdminDashboard } from "./adminApi";

const AdminDashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const data = await fetchAdminDashboard(token);
        console.log(data);
      } catch (error) {
        console.error("Error fetching admin dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
};

export default AdminDashboard;
