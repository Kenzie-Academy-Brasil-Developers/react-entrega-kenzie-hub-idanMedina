import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { RoutesMaster as Routes } from "./routes/routes.js";
import { api } from "./services/api.js";
import { GlobalStyle } from "./styled/global.js";

function App() {
  /* const [user, setUser] = useState(null); */
  /*   const navigate = useNavigate();

   const userLogin= async (data, setLoading) =>{
    try {
      setLoading(true)
      const response= await api.post('/user', data);
      localStorage.setItem('@TOKEN', response.token);
      localStorage.setItem('@USERID', response.user.id);
      navigate('dashboard')
    } catch (error) {
      toast.error(error.response.message);
    } finally {
      setLoading(false)
    }
  }; */
  /* 
  async function newUser(data, setLoading){
   try {
    setLoading(true)
     const response= await api.post('/session', data);
     console.log(response.id);
     navigate('/')
   } catch (error) {
     toast.error(error.response.message);
   } finally {
     setLoading(false)
   }
 }; */

  /*   function logout(){
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    setUser(null);
    navigate('/'); 
 } */

  return (
    <>
      <GlobalStyle />
      <Routes
        /* setUser={setUser} */ /* userLogin={userLogin} */ /* newUser={newUser} */
      />
    </>
  );
}

export default App;
