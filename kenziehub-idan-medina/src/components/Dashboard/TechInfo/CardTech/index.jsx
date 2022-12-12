import React, { useState } from 'react'
import { useContext } from 'react'
import { TechContext } from '../../../../providers/TechContext'
import { UserContext } from '../../../../providers/UserContext'
import { DivIcon, Trash } from '../../../../styled/icons'
import { Paragraph, TechName } from '../../../../styled/typography'

const CardTech = ({index}) => {
  const {user} = useContext(UserContext);
  const { removeTech } = useContext(TechContext);
  const [loading, setLoading] = useState(false);

  return (
    <li>
      <TechName>{user.techs[index].title}</TechName>
      <DivIcon>
        <Paragraph>{user.techs[index].status}</Paragraph>
        <Trash id={user.techs[index].id} onClick={(e) => {
          e.preventDefault();
          removeTech(e.target.id, setLoading)}}/>
      </DivIcon>
    </li>
  )
}

export default CardTech