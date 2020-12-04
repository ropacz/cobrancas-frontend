import React from "react";
import "./styles.css";
//libs
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//components
import Alert from "../Alert";
import Loading from "../Loading";
import InputPassword from "../InputPassword";
//containers
import { LoginContainer } from "../../container/LoginContext";

export default function FormularioLogin({ handleSubmitForm, errors }) {
  const { register, handleSubmit } = useForm();
  const { loading } = LoginContainer.useContainer();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="login__box">
        <div className="login__logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="login__form">
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            ref={register}
          />
          <label htmlFor="senha">Senha</label>
          <InputPassword name="senha" register={register} />
          {errors ? <Alert type="Erro" message={errors.message} /> : ""}
          <p>Esqueceu a senha</p>
          <button className="btn btn--confirm">Entrar</button>
        </form>
      </div>

      <div className="login__signup">
        Não tem uma conta? <Link to="/signup">Cadastre-se! </Link>
      </div>
    </>
  );
}
