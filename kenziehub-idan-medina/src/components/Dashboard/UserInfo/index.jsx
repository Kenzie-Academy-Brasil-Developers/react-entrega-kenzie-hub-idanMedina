import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Paragraph, Title1 } from "../../../styled/typography";

const UserInfo = () => {
  const{user}=useContext(UserContext)
  
  return (
    <>
      <section>
        <Title1>{user && user.name}</Title1>
        <Paragraph>{user && user.course_module}</Paragraph>
      </section>
      <hr/>
    </>
  );

};

export default UserInfo;