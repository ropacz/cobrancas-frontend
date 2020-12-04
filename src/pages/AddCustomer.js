import React from "react";

import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";

import validateCpf from "../helpers/ValidateCpf";

import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import AvatarProfile from "../components/AvatarProfile";
import Alert from "../components/Alert";
import useCustomers from "../hooks/useCustomers";
import Loading from "../components/Loading";
import PageLayout from "./PageLayout";

export default function AddCustomer({ match }) {
  const { insert, loading, hookMessage } = useCustomers();

  const { register, handleSubmit, control, errors } = useForm();
  const [inputCpf, setInputCpf] = React.useState(null);
  const [inputTel, setInputTel] = React.useState(null);

  const [errorMessage, setErrorMessage] = React.useState(null);

  const inputRefCpf = React.useRef("");
  const inputRefTel = React.useRef("");

  const onSubmit = (data) => {
    setErrorMessage("");
    inputRefCpf.current = inputCpf;
    inputRefTel.current = inputTel;

    if (!validateCpf(data.cpf)) {
      setErrorMessage("CPF inválido!");
      inputRefCpf.current?.focus();
    } else {
      insert(data);
    }
  };

  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="header__top">
            <div className="top__container">
              <h2>Adicionar cliente</h2>
              <AvatarProfile />
            </div>
          </div>

          <div className="container__content">
            <div className="column column--full">
              {errors.nome && (
                <Alert message={errors.nome.message} type="Erro" />
              )}
              {errors.email && (
                <Alert message={errors.email.message} type="Erro" />
              )}
              {errors.tel && <Alert message={errors.tel.message} type="Erro" />}
              {errors.cpf && <Alert message={errors.cpf.message} type="Erro" />}
              {!errors.cpf && errorMessage && (
                <Alert message={errorMessage} type="Erro" />
              )}

              <div className="box">
                {loading && <Loading />}
                {!loading && (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form__general"
                  >
                    <label> Nome </label>
                    <input
                      name="nome"
                      ref={register({
                        required: "Campo nome é obrigatório",
                      })}
                    />
                    <label> E-mail </label>
                    <input
                      defaultValue=""
                      type="email"
                      name="email"
                      ref={register({ required: "Campo email é obrigatório" })}
                    />

                    <div className="group__inputs">
                      <div className="column__input">
                        <label> CPF </label>
                        <Controller
                          as={
                            <NumberFormat
                              getInputRef={(el) => setInputCpf(el)}
                            />
                          }
                          control={control}
                          rules={{ required: "Campo CPF é obrigatório" }}
                          format="###.###.###-##"
                          mask="_"
                          name="cpf"
                          defaultValue=""
                        />
                      </div>
                      <div className="column__input">
                        <label> Telefone </label>
                        <Controller
                          as={
                            <NumberFormat
                              getInputRef={(el) => setInputTel(el)}
                            />
                          }
                          control={control}
                          rules={{ required: "Campo telefone é obrigatório" }}
                          format="(##) #####-#####"
                          mask="_"
                          name="tel"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="group__buttons">
                      <Link to="/customers" className="btn btn--outline">
                        Cancelar
                      </Link>
                      <button className="btn btn--confirm">
                        Salvar alterações
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
