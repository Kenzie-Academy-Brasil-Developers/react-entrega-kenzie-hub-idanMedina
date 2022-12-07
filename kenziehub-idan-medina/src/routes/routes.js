import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const RoutesMaster = (
  { response, setLogin} 
) => {
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage  setLogin= {setLogin} />} />
      <Route
        path="register"
        element={<RegisterPage />}
      />
      <Route path="dashboard" element={<Dashboard response = {response} setLogin= {setLogin} />} />
    </Routes>
  );
};

export default RoutesMaster;
