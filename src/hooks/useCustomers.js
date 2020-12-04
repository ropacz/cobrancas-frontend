import React from "react";
import { LoginContainer } from "../container/LoginContext";
import { requestApiWithToken } from "../helpers/Connections";
import history from "../history";

export default function useCustomers() {
  const { token } = LoginContainer.useContainer();
  const [loading, setLoading] = React.useState(true);
  const [hookMessage, setHookMessage] = React.useState(null);

  const perPage = 10;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [nameCustomer, setNameCustomer] = React.useState(null);

  const [dataCustomers, setDataCustomers] = React.useState(undefined);

  React.useEffect(() => {
    if (!nameCustomer) {
      getCustomersPerPage();
    } else {
      getSearchCustomerPerName();
    }
  }, [currentPage, nameCustomer]);

  /// adicionar cliente
  const insert = async (dataForm) => {
    setLoading(true);
    const dataUser = {
      nome: dataForm.nome,
      cpf: dataForm.cpf.replace(/\D/g, ""),
      email: dataForm.email,
      tel: dataForm.tel ? dataForm.tel : null,
    };
    const data = await requestApiWithToken(
      "POST",
      `/clientes`,
      dataUser,
      token
    );
    const dataJson = await data.json();

    try {
      if (dataJson.status === "erro") {
        setHookMessage({ message: "Dados mal-formatados!" });
      } else {
        setHookMessage({ message: "Usuário cadastrado com sucesso!" });
        history.push("/customers");
      }
    } catch (error) {
      setHookMessage({ message: "Erro ao tentar conectar ao servidor." });
    }
    setLoading(false);
  };

  //pega todos o clientes da API
  const getCustomersPerPage = async (all = false) => {
    let url = `/clientes`;
    if (!all) {
      url = `/clientes?clientesPorPagina=${perPage}&offset=${
        currentPage * perPage
      }`;
    }
    setLoading(true);
    const data = await requestApiWithToken("GET", url, null, token);
    const dataJson = await data.json();

    try {
      if (dataJson.dados !== undefined) {
        setDataCustomers(dataJson.dados.clientes);
        setTotalPages(dataJson.dados.totalDePaginas);
      }
      setLoading(false);
    } catch (error) {
      setHookMessage({ message: "Erro ao tentar conectar ao servidor." });
    }
  };

  const getSearchCustomerPerName = async () => {
    let url = `/clientes?busca=${nameCustomer}&clientesPorPagina=${perPage}&offset=${currentPage}`;
    const data = await requestApiWithToken("GET", url, null, token);
    const dataJson = await data.json();
    try {
      if (dataJson.status !== 200) {
        setDataCustomers(dataJson.dados.clientes);
        setTotalPages(dataJson.dados.totalDePaginas);
        setLoading(false);
        console.log(dataJson.dados);
      }
    } catch (error) {
      setHookMessage({ message: "Erro ao tentar conectar ao servidor." });
    }
  };

  const searchCustomerPerName = (name) => {
    setNameCustomer(name);
  };

  return {
    insert,
    setCurrentPage,
    searchCustomerPerName,
    totalPages,
    currentPage,
    dataCustomers,
    loading,
    setLoading,
    hookMessage,
  };
}
