import React, { useContext } from "react";
import { PlusBtn } from "../../../styled/buttons";
import { Paragraph, TechTitle } from "../../../styled/typography";
import { Plus } from "../../../styled/icons";
import { UserContext } from "../../../providers/UserContext";
import { TechContext } from "../../../providers/TechContext";
import CardTech from "./CardTech";

const TechInfo = () => {
  const { user } = useContext(UserContext);
  const { setModal } = useContext(TechContext);

  return (
    <>
      <header>
        <TechTitle>Tecnologias</TechTitle>
        <PlusBtn onClick={() => setModal(true)}>
          <Plus />
        </PlusBtn>
      </header>
      <ul>
        {user.techs ? (
          user.techs.map((item, index) => <CardTech index={index} />)
        ) : (
          <Paragraph>Não há tecnologias cadastradas</Paragraph>
        )}
      </ul>
    </>
  );
};

export default TechInfo;
