import React from "react";
import { useLocation } from "react-router-dom";

export default function PageHeader() {
  const route = useLocation();

  console.log(route);
  return (
    <div className="page-header mt-5-7">
      <div className="page-leftheader">
        <h4 className="page-title mb-0">User Dashboard</h4>
        <ol className="breadcrumb mb-2">
          <li className="breadcrumb-item">
            <a href="https://test.spyro.ai/admin/dashboard">
              <i className="fa-solid fa-user-shield mr-2 fs-12" />
              Admin
            </a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <a href="https://test.spyro.ai/admin/users/dashboard">
              User Management
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#"> User Dashboard</a>
          </li>
        </ol>
      </div>
    </div>
  );
}
