import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { useContext } from "react";
import { TechContext } from "../../../../../providers/TechContext";
import { LoginBtn } from "../../../../../styled/buttons";
import {
  FormDiv,
  ModalDiv,
  ModalForm,
  ModalHead,
} from "../../../../../styled/form";
import { Close } from "../../../../../styled/icons";
import { Select } from "../../../../../styled/inputs";
import { Paragraph, TechName } from "../../../../../styled/typography";
import { useForm } from "react-hook-form";

const EditTechForm = () => {
  const { setEditModal, updateTech, id } = useContext(TechContext);
  const [loading, setLoading] = useState(false);

  const options = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    {
      value: "Intermediário",
      label: "Intermediário",
    },
    {
      value: "Avançado",
      label: "Avançado",
    },
  ];

  const schema = yup.object().shape({
    status: yup.string().required("Selecione o nível"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    updateTech(id, data, setLoading);
  };
  return (
    <ModalForm onSubmit={handleSubmit(submit)}>
      <ModalHead>
        <TechName>Atualizar status</TechName>
        <Close onClick={() => setEditModal(false)} />
      </ModalHead>
      <ModalDiv>
        <FormDiv>
          <label>Atualizar status</label>
          <Select key="status" {...register("status")}>
            {options.map((option, index) => (
              <option key={`option-${index}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {errors.status && <Paragraph>{errors.status.message}</Paragraph>}
        </FormDiv>
        <LoginBtn>Atualizar Nível</LoginBtn>
      </ModalDiv>
    </ModalForm>
  );
};

export default EditTechForm;
