import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../../services/api";
import { Paragraph, Title1 } from "../../../styled/typography";

const UserInfo = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    console.log(userId);
    const headers = {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    };
    console.log(headers);
    async function getUser() {
      try {
        const response = await api.get(`users/${userId}` /* , headers */);
        console.log(response);
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <section>
        <Title1>{user.data.name}</Title1>
        <Paragraph>{user.data.course_module}</Paragraph>
      </section>
      <hr></hr>
    </>
  );
};

export default UserInfo;
