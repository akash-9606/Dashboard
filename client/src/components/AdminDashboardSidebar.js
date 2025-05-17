import React from "react";
import "../styles/AdminDashboardSidebar.css";

export default function Sidebar({ selectedMenu, setSelectedMenu }) {
  return (
    <div className="sidebar">
      <h3>Admin Dashboard</h3>
      <ul>
        <li
          className={selectedMenu === "partner-onboarding" ? "active" : ""}
          onClick={() => setSelectedMenu("partner-onboarding")}
        >
          Partner Onboarding
        </li>
        <li
          className={selectedMenu === "users" ? "active" : ""}
          onClick={() => setSelectedMenu("users")}
        >
          User Management
        </li>
        <li
          className={selectedMenu === "reports" ? "active" : ""}
          onClick={() => setSelectedMenu("reports")}
        >
          Reports
        </li>
      </ul>
    </div>
  );
}
