import React, { useState } from "react";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { UserContext } from "../../../../providers/UserContext";
import { DivIcon, Trash } from "../../../../styled/icons";
import { ParagraphCard, TechName } from "../../../../styled/typography";
import UpdateModal from "../../Modal/UpdateModal";

const CardTech = ({ index }) => {
  const { user } = useContext(UserContext);
  const { removeTech, updateTech, setEditModal, editModal, setId } = useContext(TechContext);
  const [loading, setLoading] = useState(false);

  return (
    <li>
      <TechName>{user.techs[index].title}</TechName>
      <DivIcon>
        <ParagraphCard
          id={user.techs[index].id}
          onClick={(e) => {
            e.preventDefault();
            setEditModal(true);
            setId(e.target.id)
          }}
        >
          {user.techs[index].status}
        </ParagraphCard>
        <Trash
          id={user.techs[index].id}
          onClick={(e) => {
            e.preventDefault();
            removeTech(e.target.id, setLoading);
          }}
        />
      </DivIcon>
    </li>
  );
};

export default CardTech;
