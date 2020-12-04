import { useState, useEffect } from "react";
import { requestApiWithoutToken } from "../helpers/Connections";
import history from "../history";

export default function useLogin(InitialState = null) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const [errors, setErrors] = useState(null);

  const login = async (dataForm) => {
    setLoading(true);
    const dataLogin = {
      email: dataForm.email,
      senha: dataForm.senha,
    };
    const data = await requestApiWithoutToken("POST", `/auth`, dataLogin);
    const dataJson = await data.json();

    try {
      if (dataJson.status === "erro") {
        setErrors({ message: "Senha ou email incorretos" });
      } else {
        setToken(dataJson.dados.token);
        history.push("/home");
      }
    } catch (error) {
      console.log(error);
      setErrors({ message: "Erro ao tentar conectar ao servidor." });
    }
    setLoading(false);
  };

  function logout() {
    setErrors(null);
    setToken(null);
    history.push("/");
  }

  return { token, login, logout, errors, loading };
}
