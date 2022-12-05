import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { NavBtn } from "../../../styled/buttons";

const HeaderDashboard = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    /* setUser(null); */
    navigate("/");
  }

  return (
    <>
      <header>
        <img src={logo} alt="KenzieHub" />
        <NavBtn onClick={logout}>Sair</NavBtn>
      </header>
      <hr></hr>
    </>
  );
};

export default HeaderDashboard;
