// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav className="menu">
        <NavLink to="/requests">Requests</NavLink>
        <NavLink to="/tracking">Tracking</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/payments">Payments</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
