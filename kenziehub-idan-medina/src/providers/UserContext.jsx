import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
        setUser(resp.data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    }
    token && getUser();
  }, []);

  async function newUser(data, setLoading) {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Cadastro efetuado com sucesso", {
        theme: "dark",
        autoClose: 1667,
      });
      setTimeout(() => navigate("/"), 1667);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message.forEach((warning) => toast.error(warning), {
          theme: "dark",
        })
      );
    } finally {
      setLoading(false);
    }
  }

  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login efetuado", { theme: "dark", autoClose: 1667 });
      setTimeout(() => navigate("dashboard"), 1667);
    } catch (error) {
      toast.error(error.response.data.message, { theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  function logout() {
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, setUser, userLogin, newUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
