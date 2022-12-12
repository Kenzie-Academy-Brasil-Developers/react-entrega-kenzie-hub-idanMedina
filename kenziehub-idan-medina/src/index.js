import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { UserProvider } from "./providers/UserContext";
import { GlobalStyle } from "./styled/global";
import { StyledContainer } from "./styled/toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <App />
      </UserProvider>
      <StyledContainer />
    </BrowserRouter>
  </React.StrictMode>
);
