import React from "react";
import Layout from "../../component/Layout";
import { Outlet } from "react-router-dom";

export default function MainDashboard() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
