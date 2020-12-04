import React from "react";
import FormLogin from "../components/FormLogin";
import { LoginContainer } from "../container/LoginContext";

export default function Login() {
  const { login, errors } = LoginContainer.useContainer();

  return (
    <div className="container__center">
      <FormLogin handleSubmitForm={login} errors={errors} />
    </div>
  );
}
