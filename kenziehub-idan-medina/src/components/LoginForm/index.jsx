import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginBtn, RegisterLink } from "../../styled/buttons";
import { FormDiv, Formulary } from "../../styled/form";
import { Input } from "../../styled/inputs";
import { Paragraph, Title1 } from "../../styled/typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().required("Nome obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
});

const LoginForm = ({setLogin}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    userLogin(data, setLoading);
  };

  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setLogin(true)
      navigate("dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Formulary onSubmit={handleSubmit(submit)}>
        <Title1>Login</Title1>
        <FormDiv>
          <label>Email</label>
          <Input
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
          />
          {errors.email && <Paragraph>{errors.email.message}</Paragraph>}
        </FormDiv>
        <FormDiv>
          <label>Senha</label>
          <Input
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password && <Paragraph>{errors.password.message}</Paragraph>}
        </FormDiv>
        <LoginBtn type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </LoginBtn>
        <Paragraph>Ainda não possui uma conta?</Paragraph>
        <RegisterLink to="register">Cadastre-se</RegisterLink>
      </Formulary>
    </>
  );
};

export default LoginForm;
