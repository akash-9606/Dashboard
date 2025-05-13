import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Request from "../pages/Request";
import Tracking from "../pages/Tracking";
import Reports from "../pages/Reports";
import PaymentHistory from "../pages/PaymentHistory";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="requests" element={<Request />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="reports" element={<Reports />} />
      <Route path="payments" element={<PaymentHistory />} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default AllRoutes;
