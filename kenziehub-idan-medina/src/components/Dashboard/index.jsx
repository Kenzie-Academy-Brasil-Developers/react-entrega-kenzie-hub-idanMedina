import React from "react";
import HeaderDashboard from "./Header";
import UserInfo from "./UserInfo";

const DashboardPage = ({ response, setLogin }) => {
  return (
    <>
      <HeaderDashboard setLogin= {setLogin} />
      <UserInfo response={response} />
    </>
  );
};

export default DashboardPage;
