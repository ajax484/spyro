import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TopMenuBar from "./TopMenuBar";
import PageHeader from "./PageHeader";

export default function Layout({ children }) {
  return (
    <div className="page">
      <div className="page-main">
        <div className="app-content main-content">
          <Sidebar />
          <div className="side-app">
            <TopMenuBar />
            <PageHeader />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
