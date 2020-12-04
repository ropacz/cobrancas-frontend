import React, { useState, useEffect } from "react";

import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";

import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import AvatarProfile from "../components/AvatarProfile";
import PageLayout from "./PageLayout";

export default function EditCustomer({ match }) {
  // const { id } = match.params;
  const { register, handleSubmit, control, reset } = useForm();

  return (
    <>
      <PageLayout>
        <div className="container">
          <div className="header__top">
            <div className="top__container">
              <h2>// Editar cliente</h2>
              <AvatarProfile />
            </div>
          </div>

          <div className="container__content">
            <div className="column column--full">
              <div className="box">
                <form className="form__general">
                  <label> Nome </label>
                  <input
                    // defaultValue={location.state.customer.nome}
                    name="name"
                    ref={register}
                  />
                  <label> E-mail </label>
                  <input
                    defaultValue=""
                    type="email"
                    name="email"
                    ref={register}
                    // defaultValue={location.state.customer.email}
                  />

                  <div className="group__inputs">
                    <div className="column__input">
                      <label> CPF </label>
                      <Controller
                        as={InputMask}
                        control={control}
                        mask="999.999.999-99"
                        name="cpf"
                      />
                    </div>
                    <div className="column__input">
                      <label> Telefone </label>
                      <Controller
                        as={InputMask}
                        control={control}
                        mask="(99) 99999-9999?"
                        formatChars={{
                          9: "[0-9]",
                          "?": "[0-9]",
                        }}
                        name="tel"
                        // defaultValue={dataCustomer.tel}
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
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
