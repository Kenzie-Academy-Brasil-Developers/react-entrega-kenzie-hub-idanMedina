import React, { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import HeaderDashboard from "./Header";
import Modal from "./Modal";
import TechInfo from "./TechInfo";
import UserInfo from "./UserInfo";

const DashboardPage = () => {
const {modal} = useContext(TechContext);

  return (
    <>
      <HeaderDashboard />
      <UserInfo />
      <TechInfo />
      {modal && <Modal />}
    </>
  );
};

export default DashboardPage;
