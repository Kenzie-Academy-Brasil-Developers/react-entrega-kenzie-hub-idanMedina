import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UserContext } from "../../providers/UserContext";
import { RegisterBtn } from "../../styled/buttons";
import { FormDiv, Formulary } from "../../styled/form";
import { Input, Select } from "../../styled/inputs";
import { Paragraph, ParagraphRegister, Title1 } from "../../styled/typography";

const RegisterForm = () => {
  const { newUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
      label: "Segundo módulo (Frontend Avançado)",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
      label: "Quarto módulo (Backend Avançado)",
    },
  ];

  const schema = yup.object().shape({
    email: yup.string().required("Nome obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas não conferem"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatória"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    newUser(data, setLoading);
  };

  return (
    <>
      <Formulary onSubmit={handleSubmit(submit)}>
        <Title1>Crie sua conta</Title1>
        <ParagraphRegister>Rápido e grátis. Vamos nessa!</ParagraphRegister>
        <FormDiv>
          <label>Nome</label>
          <Input
            key="name"
            placeholder="Digite aqui seu nome"
            type="text"
            {...register("name")}
          />
          {errors.name && <Paragraph>{errors.name.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Email</label>
          <Input
            key="email"
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
          />
          {errors.email && <Paragraph>{errors.email.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Senha</label>
          <Input
            key="password"
            placeholder="Digite aqui seu senha"
            type="password"
            {...register("password")}
          />
          {errors.password && <Paragraph>{errors.password.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Confirmar Senha</label>
          <Input
            key="passwordConfirm"
            placeholder="Digite aqui novamente sua senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <Paragraph>{errors.passwordConfirm.message}</Paragraph>
          )}
        </FormDiv>
        <FormDiv>
          <label>Bio</label>
          <Input
            key="bio"
            placeholder="Fale sobre você"
            type="text"
            {...register("bio")}
          />
          {errors.bio && <Paragraph>{errors.bio.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Contato</label>
          <Input
            key="contact"
            placeholder="Opção de contato"
            type="text"
            {...register("contact")}
          />
          {errors.contact && <Paragraph>{errors.contact.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Selecionar módulo</label>
          <Select key="course_module" {...register("course_module")}>
            {options.map((option, index) => (
              <option key={`option-${index}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {errors.course_module && (
            <Paragraph>{errors.course_module.message}</Paragraph>
          )}
        </FormDiv>
        <RegisterBtn disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </RegisterBtn>
      </Formulary>
    </>
  );
};

export default RegisterForm;
