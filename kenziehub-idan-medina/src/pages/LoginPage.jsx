import React from "react";
import logo from "../assets/Logo.png";
import LoginForm from "../components/LoginForm";

const LoginPage = ({setUser}) => {
  return (
    <>
      <img id="logo" src={logo} alt="Kenzie Hub" />
      <LoginForm  setUser= {setUser} />
    </>
  );
};

export default LoginPage;
