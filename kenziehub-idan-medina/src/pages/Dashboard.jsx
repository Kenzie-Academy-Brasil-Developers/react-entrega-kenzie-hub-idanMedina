import React from "react";
import DashboardPage from "../components/Dashboard";

const Dashboard = ({response, setLogin}) => {
  return (
    <>
      <DashboardPage response={response} setLogin= {setLogin}  />
    </>
  );
};

export default Dashboard;
