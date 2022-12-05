import React from "react";
import logo from "../assets/Logo.png";
import RegisterForm from "../components/RegisterForm";
import { NavLink } from "../styled/buttons";
import { DivNav } from "../styled/form";

const RegisterPage = (/* {newUser} */) => {
  return (
    <>
      <DivNav>
        <img src={logo} alt="KenzieHub" />
        <NavLink to="/">Voltar</NavLink>
      </DivNav>

      <RegisterForm /* newUser={newUser} */ />
    </>
  );
};

export default RegisterPage;
