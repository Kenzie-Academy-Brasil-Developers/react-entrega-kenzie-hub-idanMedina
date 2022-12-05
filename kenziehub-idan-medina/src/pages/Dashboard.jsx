import React from "react";
import DashboardPage from "../components/Dashboard";

const Dashboard = ({response}) => {
  return (
    <>
      <DashboardPage response={response} />
    </>
  );
};

export default Dashboard;
