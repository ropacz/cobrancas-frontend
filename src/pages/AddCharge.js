import React, { useEffect, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import Select from "react-select";

import { Link } from "react-router-dom";
import AvatarProfile from "../components/AvatarProfile";
import Alert from "../components/Alert";
import useCustomers from "../hooks/useCustomers";
import Loading from "../components/Loading";

export default function AddCharge() {
  const { dataCustomers, loading } = useCustomers(true);
  const { register, handleSubmit, control, errors, watch } = useForm();

  function formartDate(now) {
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = now.getFullYear() + "-" + month + "-" + day;
    return today;
  }
  const startDate = watch("data", formartDate(new Date()));
  const [selectDataCustomers, setSelectDataCustomers] = useState(null);

  const [errorMessage, setErrorMessage] = React.useState(null);

  useEffect(() => {
    (async () => {
      if (dataCustomers) {
        setSelectDataCustomers(
          dataCustomers.map((customer) => ({
            value: customer.id,
            label: customer.nome,
          }))
        );
      }
    })();
  }, [dataCustomers]);

  const onSubmit = (data) => {
    setErrorMessage();
  };

  return (
    <>
      <div className="container">
        <div className="header__top">
          <div className="top__container">
            <h2>Adicionar cobranças</h2>
            <AvatarProfile />
          </div>
        </div>

        <div className="container__content">
          <div className="column column--full">
            {errors.nome && <Alert message={errors.nome.message} type="Erro" />}
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
                  <label> Clientes </label>
                  <Controller
                    name="cliente"
                    as={<Select placeholder="Nome do cliente..." />}
                    options={selectDataCustomers}
                    control={control}
                    rules={{ required: true }}
                    defaultValue="seu nome"
                  />

                  <label> E-mail </label>
                  <textarea name="descricao" ref={register} />

                  <div className="group__inputs">
                    <div className="column__input">
                      <label> Valor </label>
                      <Controller
                        as={<NumberFormat ref={register} />}
                        control={control}
                        rules={{ required: "Campo valor é obrigatório" }}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        placeholder="R$ 0,00"
                        prefix={"R$ "}
                        mask=" "
                        name="valor"
                        defaultValue=""
                      />
                    </div>
                    <div className="column__input">
                      <label> Data de vencimento </label>
                      <Controller
                        name="data"
                        control={control}
                        defaultValue={startDate}
                        render={({ value }) => (
                          <input
                            name="data"
                            type="date"
                            ref={register}
                            defaultValue={value}
                          />
                        )}
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
    </>
  );
}
