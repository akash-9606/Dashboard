import React from "react";
import { Route, Routes } from "react-router-dom";

// Patient Pages
import LandingPage from "../pages/Landing";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import TrackAmbulancePage from "../pages/TrackAmbulancePage";
import RequestAmbulance from "../pages/RequestAmbulance";

// Partner Dashboard
import Sidebar from "../components/PartnerDashboardSidebar";
import Request from "../pages2/Request";
import Tracking from "../pages2/Tracking"; 
import Reports from "../pages2/Reports";
import PaymentHistory from "../pages2/PaymentHistory";

// Admin Dashboard
import PartnerOnboardingAndCommission from "../pages3/PartnerOnboardingAndCommission";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public & Patient Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
      <Route path="/request-ambulance" element={<RequestAmbulance />} />
      <Route path="/track-ambulance" element={<TrackAmbulancePage />} />

      {/* Partner Dashboard with Sidebar Layout */}
      <Route path="/partner-dashboard" element={<Sidebar />}>
        <Route path="requests" element={<Request />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="reports" element={<Reports />} />
        <Route path="payments" element={<PaymentHistory />} />
      </Route>

      <Route path="admin-dashboard" element={<PartnerOnboardingAndCommission/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
