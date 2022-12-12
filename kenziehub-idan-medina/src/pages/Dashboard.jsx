import React from "react";
import DashboardPage from "../components/Dashboard";

const Dashboard = ({response, setUser}) => {
  return (
    <>
      <DashboardPage response={response} setUser= {setUser}  />
    </>
  );
};

export default Dashboard;
