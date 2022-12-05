import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const RoutesMaster = (
  { setUser } /* {userLogin} */ /* , {newUser} */
) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage /* userLogin={userLogin} */ />} />
      <Route
        path="register"
        element={<RegisterPage /* newUser={newUser} */ />}
      />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMaster;
