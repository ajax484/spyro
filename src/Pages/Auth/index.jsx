import React from "react";
import AdminLayout from "../../component/AdminLayout";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
