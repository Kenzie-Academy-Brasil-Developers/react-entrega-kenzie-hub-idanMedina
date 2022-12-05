import React from "react";
import HeaderDashboard from "./Header";
import UserInfo from "./UserInfo";

const DashboardPage = ({ response }) => {
  return (
    <>
      <HeaderDashboard />
      <UserInfo response={response} />
    </>
  );
};

export default DashboardPage;
