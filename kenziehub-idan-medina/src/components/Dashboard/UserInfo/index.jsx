import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../../services/api";
import { Paragraph, Title1 } from "../../../styled/typography";

const UserInfo = () => {
  const [response, setResponse] = useState([]);
  console.log(response)

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    console.log(token);
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(headers);
    async function getUser() {
      try {
        const resp = await api.get(`/profile` , headers);
        console.log(resp);
        setResponse(resp);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <section>
        <Title1>{/* response.data.name */}</Title1>
        <Paragraph>{/* response.data.course_module */}</Paragraph>
      </section>
      <hr></hr>
    </>
  );
};

export default UserInfo;
