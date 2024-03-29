import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

const AuthRoute = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    user || navigate("/");
  }, []);

  return <>{user ? <Outlet /> : <span> Carregando...</span>}</>;
};
export default AuthRoute;
