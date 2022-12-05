import React from "react";
import { Paragraph, Title1 } from "../../../styled/typography";

const UserInfo = ({response}) => {
  
  return (
    <>
      <section>
        <Title1>{response && response.name}</Title1>
        <Paragraph>{response && response.course_module}</Paragraph>
      </section>
      <hr></hr>
    </>
  );

};

export default UserInfo;