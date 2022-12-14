import React from "react";
import logo from "../assets/Logo.png";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <img id="logo" src={logo} alt="Kenzie Hub" />
      <LoginForm  />
    </>
  );
};

export default LoginPage;
