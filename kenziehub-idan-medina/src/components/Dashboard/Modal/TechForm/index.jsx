import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { LoginBtn } from "../../../../styled/buttons";
import {
  FormDiv,
  ModalDiv,
  ModalForm,
  ModalHead,
} from "../../../../styled/form";
import { Close } from "../../../../styled/icons";
import { Input, Select } from "../../../../styled/inputs";
import { Paragraph, TechName } from "../../../../styled/typography";
import { useForm } from "react-hook-form";

const TechForm = () => {
  const { setModal } = useContext(TechContext);
  const { setTech } = useContext(TechContext);
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
    title: yup.string().required("Informe a tecnologia"),
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
    setTech(data, setLoading);
  };
  return (
    <ModalForm onSubmit={handleSubmit(submit)}>
      <ModalHead>
        <TechName>Cadastrar Tecnologia</TechName>
        <Close onClick={() => setModal(false)} />
      </ModalHead>
      <ModalDiv>
        <FormDiv>
          <label>Nome</label>
          <Input
            key="title"
            placeholder="Digite aqui a sua tecnologia"
            type="text"
            {...register("title")}
          />
          {errors.title && <Paragraph>{errors.title.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Selecionar status</label>
          <Select key="status" {...register("status")}>
            {options.map((option, index) => (
              <option key={`option-${index}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {errors.status && <Paragraph>{errors.status.message}</Paragraph>}
        </FormDiv>
        <LoginBtn>Cadastrar Tecnologia</LoginBtn>
      </ModalDiv>
    </ModalForm>
  );
};

export default TechForm;
