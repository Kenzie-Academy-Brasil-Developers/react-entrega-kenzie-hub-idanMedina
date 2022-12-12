import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TechProvider from "../providers/TechContext";
import AuthRoute from "./AuthRoute";

export const RoutesMaster = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<AuthRoute />}>
        <Route
          index
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesMaster;
