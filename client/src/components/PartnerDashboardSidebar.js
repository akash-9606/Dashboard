import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/PartnerDashboardSidebar.css";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {"\u2630"}
      </button>

      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div className="layout">
        <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
          <h2>Dashboard</h2>
          <nav>
            <Link to="/" onClick={closeSidebar}>🏠 Home</Link>
            <Link to="requests" onClick={closeSidebar}>📥 Requests</Link>
            <Link to="tracking" onClick={closeSidebar}>📍 Tracking</Link>
            <Link to="reports" onClick={closeSidebar}>📊 Reports</Link>
            <Link to="payments" onClick={closeSidebar}>💳 Payments</Link>
          </nav>
        </aside>

        <main className="content">
          <div className="welcome-container">
            <h1>Welcome to Partner Dashboard</h1>
          </div>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
