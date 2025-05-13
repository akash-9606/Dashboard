// src/components/DashboardLayout.js
import React from "react";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">{children}</main>
    </div>
  );
}

export default DashboardLayout;
