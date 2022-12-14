import React, { createContext, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("@TOKEN");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function setTech(data, setLoading) {
    try {
      setLoading(true);
      const response = await api.post("/users/techs", data, headers);
      setUser(response.data.user);
      toast.success("Tecnologia adicionada", {
        theme: "dark",
        autoClose: 1667,
      });
      setModal(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  async function removeTech(id, setLoading) {
    try {
      setLoading(true);
      const response = await api.delete(`/users/techs/${id}`, headers);
      setUser(response.data.user);
      toast.success("Tecnologia removida", {
        theme: "dark",
        autoClose: 1667,
      });
      setTimeout(() => navigate("/dashboard"), 1667);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  async function updateTech(id, body, setLoading) {
    try {
      setLoading(true);
      const response = await api.put(`/users/techs/${id}`, body, headers);
      setUser(response.data.user);
      toast.success("Nível atualizado", {
        theme: "dark",
        autoClose: 1667,
      });
      setTimeout(() => navigate("/dashboard"), 1667);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        modal,
        editModal,
        id,
        setId,
        setEditModal,
        setModal,
        setTech,
        removeTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
