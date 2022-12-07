import React, { useEffect, useState } from "react";
import { RoutesMaster as Routes } from "./routes/routes.js";
import { api } from "./services/api.js";
import { GlobalStyle } from "./styled/global.js";

function App() {
  const [response, setResponse] = useState(true);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    async function getUser() {
      try {
        const resp = await api.get(`/profile`, headers);
        setResponse(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(login)
    getUser();
  }, [login]);

  return (
    <>
      <GlobalStyle />
      <Routes response={response} setLogin={setLogin} />
    </>
  );
}

export default App;
