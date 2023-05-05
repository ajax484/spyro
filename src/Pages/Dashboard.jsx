import React from "react";
import Layout from "../component/Layout";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
