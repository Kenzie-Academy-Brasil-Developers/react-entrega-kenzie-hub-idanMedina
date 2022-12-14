import React, { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import HeaderDashboard from "./Header";
import Modal from "./Modal";
import UpdateModal from "./Modal/UpdateModal";
import TechInfo from "./TechInfo";
import UserInfo from "./UserInfo";

const DashboardPage = () => {
const {editModal, modal} = useContext(TechContext);

  return (
    <>
      <HeaderDashboard />
      <UserInfo />
      <TechInfo />
      {modal && <Modal />}
      {editModal && <UpdateModal />}
    </>
  );
};

export default DashboardPage;
