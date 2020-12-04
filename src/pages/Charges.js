import React, { useState } from "react";
import HeaderAccount from "../components/HeaderAccount";
import {
  List,
  ListHeader,
  ListTitleHeader,
  ListItem,
  ListItemText,
  ListItemStatus,
  ListItemIconButton,
} from "../components/List";
import Menu from "../components/Menu";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import TileStats from "../components/TileStats";
import PageLayout from "./PageLayout";

const relatorio = {
  qtdClientesAdimplentes: 5,
  qtdClientesInadimplentes: 10,
  qtdCobrancasPrevistas: 10,
  qtdCobrancasPagas: 5,
  qtdCobrancasVencidas: 5,
  saldoEmConta: 8000,
};

const formatInReal = (value) => {
  return (value / 100).toFixed(2);
};

const cobrancas = [
  {
    id: "1",
    idDoCliente: "2",
    descricao: "descrição da cobrança",
    valor: formatInReal(120010),
    vencimento: "data_de_vencimento",
    linkDoBoleto: "http://link.do.boleto",
    status: "aguardando",
  },
  {
    id: "2",
    idDoCliente: "3",
    descricao: "descrição da cobrança",
    valor: formatInReal(120025),
    vencimento: "data_de_vencimento",
    linkDoBoleto: "http://link.do.boleto",
    status: "pago",
  },
  {
    id: "3",
    idDoCliente: "4",
    descricao: "descrição da cobrança",
    valor: formatInReal(120035),
    vencimento: "data_de_vencimento",
    linkDoBoleto: "http://link.do.boleto",
    status: "vencido",
  },
];

export default function Charges() {
  const [loading] = useState(true);

  const changeStatus = (id, status) => {
    console.log(id, status);
  };

  return (
    <>
      <PageLayout>
        <div className="container">
          <HeaderAccount>
            <TileStats value={`R$ ${relatorio.saldoEmConta}`} />
          </HeaderAccount>
          <div className="container__content">
            <div className="column column--full">
              <Search
                textButton="Buscar"
                iconButton="/images/search.svg"
                placeholder="Procurar por Nome, E-mail ou CPF"
              />
              <List>
                <ListHeader>
                  <ListTitleHeader text="Cliente" />
                  <ListTitleHeader text="Descrição" />
                  <ListTitleHeader text="Valor" />
                  <ListTitleHeader text="Status" />
                  <ListTitleHeader text="Vencimento" />
                  <ListTitleHeader text="Boleto" />
                </ListHeader>

                {loading &&
                  cobrancas.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText text={item.idDoCliente} />
                      <ListItemText text={item.descricao} />
                      <ListItemText text={item.valor} />

                      <ListItemStatus
                        text={item.status}
                        color={
                          item.status === "pago"
                            ? "#4EC06E"
                            : item.status === "vencido"
                            ? "#FF4D4D"
                            : "#5197B5"
                        }
                        icon={
                          item.status === "pago"
                            ? "/images/swipe-check.svg"
                            : item.status === "aguardando"
                            ? "/images/swipe-not-check.svg"
                            : null
                        }
                        handleItemStatus={
                          item.status === "pago"
                            ? () => changeStatus(item.id, "aguardando")
                            : item.status === "aguardando"
                            ? () => changeStatus(item.id, "pago")
                            : null
                        }
                      />

                      <ListItemText text={item.vencimento} />
                      <ListItemIconButton
                        alt="Imprimir"
                        icon="/images/print.svg"
                        handleItemIconButton={() => {
                          console.log(item.linkDoBoleto);
                        }}
                      />
                    </ListItem>
                  ))}
              </List>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
