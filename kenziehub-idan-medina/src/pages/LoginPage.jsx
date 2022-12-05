import React from "react";
import logo from "../assets/Logo.png";
import LoginForm from "../components/LoginForm";

const LoginPage = (/* {userLogin} */) => {
  return (
    <>
      <img id="logo" src={logo} alt="Kenzie Hub" />
      <LoginForm /* userLogin={userLogin} */ />
    </>
  );
};

export default LoginPage;
