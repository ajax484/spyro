import React from "react";
import Layout from "../../component/DashboardLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function MainDashboard() {
  const navigate = useNavigate();
  const {} = useAuth();

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
