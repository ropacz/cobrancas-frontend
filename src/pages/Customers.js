import React, { useState, useEffect } from "react";
//libs
import { Link } from "react-router-dom";
//components
import Alert from "../components/Alert";
import HeaderAccount from "../components/HeaderAccount";
import {
  List,
  ListHeader,
  ListTitleHeader,
  ListItem,
  ListItemText,
  ListItemStatus,
  ListIcon,
} from "../components/List";
import Loading from "../components/Loading";
import Menu from "../components/Menu";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import TileStats from "../components/TileStats";

//hooks
import useCustomers from "../hooks/useCustomers";
import PageLayout from "./PageLayout";

const relatorio = {
  qtdClientesAdimplentes: 10,
  qtdClientesInadimplentes: 12,
  qtdCobrancasPrevistas: 20,
  qtdCobrancasPagas: 30,
  qtdCobrancasVencidas: 40,
  saldoEmConta: 6000,
};

export default function Customers() {
  const {
    dataCustomers,
    searchCustomerPerName,
    loading,
    setCurrentPage,
    currentPage,
    totalPages,
    hookMessage,
  } = useCustomers();
  // const [dataCustomers, setDataCustomers] = useState(null);

  const search = (data) => {
    searchCustomerPerName(data.search);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PageLayout>
        <div className="container">
          <HeaderAccount>
            <TileStats value={`R$ ${relatorio.saldoEmConta}`} />
          </HeaderAccount>
          <div className="container__content">
            {hookMessage && (
              <Alert
                type="Sucesso"
                message={hookMessage.message}
                color="#2ecc71"
              />
            )}
            <div className="column column--full">
              <div className="column column--row">
                <div>
                  <Link to="/customers/add" className="btn btn--outline">
                    Adicionar Cliente
                  </Link>
                </div>

                <Search
                  textButton="Buscar"
                  iconButton="http://localhost:3000/images/search.svg"
                  placeholder="Procurar por Nome, E-mail ou CPF"
                  handleButtonSearch={search}
                />
              </div>

              <List>
                <ListHeader>
                  <ListTitleHeader text="Cliente" />
                  <ListTitleHeader text="Cobranças Feitas" />
                  <ListTitleHeader text="Cobranças Recebidas" />
                  <ListTitleHeader text="Status" />
                  <ListTitleHeader />
                </ListHeader>
                {loading && <Loading />}
                {!loading && !dataCustomers && <p>Cliente não cadastrado!</p>}
                {console.log(dataCustomers)}
                {!loading &&
                  dataCustomers &&
                  dataCustomers.map((customer) => (
                    <ListItem key={customer.id}>
                      <div>
                        <ListItemText text={customer.nome} />
                        <ListItemText text={customer.email} />
                      </div>

                      <ListItemText text={customer.cobrancas_total} />
                      <ListItemText text={customer.cobrancas_pago} />

                      <ListItemStatus
                        text={customer.status ? "Em dia" : "Inadimplente"}
                        color={customer.status ? "#4EC06E" : "#FF4D4D"}
                      />
                      <Link to={`/customers/${customer.id}`}>
                        <ListIcon
                          alt="Imprimir"
                          icon="http://localhost:3000/images/edit.svg"
                        />
                      </Link>
                    </ListItem>
                  ))}
              </List>
              {!loading && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
