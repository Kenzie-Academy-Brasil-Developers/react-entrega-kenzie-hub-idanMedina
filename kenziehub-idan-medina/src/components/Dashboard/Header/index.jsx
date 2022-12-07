import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { NavBtn } from "../../../styled/buttons";

const HeaderDashboard = ({setLogin}) => {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setLogin(false);
    navigate("/");
  }

  return (
    <>
      <header>
        <img src={logo} alt="KenzieHub" />
        <NavBtn onClick={logout}>Sair</NavBtn>
      </header>
      <hr/>
    </>
  );
};

export default HeaderDashboard;
