import React, { useContext } from "react";
import logo from "../../../assets/Logo.png";
import { UserContext } from "../../../providers/UserContext";
import { NavBtn } from "../../../styled/buttons";

const HeaderDashboard = () => {
  const {logout} =useContext(UserContext);

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
