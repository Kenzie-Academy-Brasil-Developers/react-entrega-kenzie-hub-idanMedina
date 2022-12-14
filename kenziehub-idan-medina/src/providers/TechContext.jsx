import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { setUser } = useContext(UserContext);
  const [techs, setTechs] = useState(null);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setId] = useState(null);

  const token = localStorage.getItem("@TOKEN");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    }
    token && getUser();
  }, [techs]);

  async function setTech(data, setLoading) {
    try {
      setLoading(true);
      await api.post("/users/techs", data, headers);
      toast.success("Tecnologia adicionada", {
        theme: "dark",
        autoClose: 1667,
      });
      setModal(false);
      setTechs("Tecnologia adicionada");
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
      await api.delete(`/users/techs/${id}`, headers);
      toast.success("Tecnologia removida", {
        theme: "dark",
        autoClose: 1667,
      });
      setTechs("Tecnologia removida");
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
      await api.put(`/users/techs/${id}`, body, headers);

      toast.success("Nível atualizado", {
        theme: "dark",
        autoClose: 1667,
      });
      setTechs("Nível atualizado");
      setEditModal(false);
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
