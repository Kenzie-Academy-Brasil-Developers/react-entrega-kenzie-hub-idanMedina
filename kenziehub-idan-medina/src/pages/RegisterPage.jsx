import React from "react";
import logo from "../assets/Logo.png";
import RegisterForm from "../components/RegisterForm";
import { NavLink } from "../styled/buttons";

const RegisterPage = () => {
  return (
    <>
      <header>
        <img src={logo} alt="KenzieHub" />
        <NavLink to="/">Voltar</NavLink>
      </header>

      <RegisterForm />
    </>
  );
};

export default RegisterPage;
