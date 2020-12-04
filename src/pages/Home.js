import react, { useState, useEffect } from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import HeaderAccount from "../components/HeaderAccount";
import Menu from "../components/Menu";
import MiniCard from "../components/MiniCard";
import Sidebar from "../components/Sidebar";
import TileInfo from "../components/TileInfo";
import TileStats from "../components/TileStats";
import { Tabs, TabButton } from "../components/Tabs";
import PageLayout from "./PageLayout";

const InitialStataRelatorio = {
  qtdClientesAdimplentes: 10,
  qtdClientesInadimplentes: 12,
  qtdCobrancasPrevistas: 20,
  qtdCobrancasPagas: 30,
  qtdCobrancasVencidas: 40,
  saldoEmConta: 6000,
};

const NewStataRelatorio = {
  qtdClientesAdimplentes: 5,
  qtdClientesInadimplentes: 10,
  qtdCobrancasPrevistas: 10,
  qtdCobrancasPagas: 5,
  qtdCobrancasVencidas: 5,
  saldoEmConta: 8000,
};

export default function Home() {
  const [relatorio, setRelatorio] = useState(InitialStataRelatorio);
  const [dataRelatorio, setDataRelatorio] = useState("11-05-2020");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setRelatorio(InitialStataRelatorio);
    if (dataRelatorio === "11-05-2020") {
      setRelatorio(InitialStataRelatorio);
    } else {
      setRelatorio(NewStataRelatorio);
    }
    setLoading(false);
  }, [dataRelatorio]);

  const handleTabButton = (date) => {
    setDataRelatorio(date);
  };

  return (
    <>
      <PageLayout>
        <div className="container">
          <HeaderAccount>
            <TileStats
              iconUrl="/images/dollar.svg"
              title="Saldo"
              value={`R$ ${relatorio.saldoEmConta}`}
            />
          </HeaderAccount>

          <div className="container__content">
            <div className="column column--full">
              <Tabs>
                <TabButton
                  textButton="Este mês"
                  handleTabButton={() => handleTabButton("11-05-2020")}
                  active
                />
                <TabButton
                  textButton="Este ano"
                  handleTabButton={() => handleTabButton("12-05-2020")}
                />
                <TabButton
                  textButton="Desde o início"
                  handleTabButton={() => handleTabButton("13-05-2020")}
                />
              </Tabs>
              <div className="column column--row">
                {!loading && (
                  <>
                    <MiniCard iconUrl="/images/group.svg" title="Clientes">
                      <TileInfo
                        text="Em dia"
                        value={relatorio.qtdClientesAdimplentes}
                        color="#4EC06E"
                      />
                      <TileInfo
                        text="Inadimplentes"
                        value={relatorio.qtdClientesInadimplentes}
                        color="#FF4D4D"
                      />
                    </MiniCard>

                    <MiniCard iconUrl="/images/money.svg" title="Cobranças">
                      <TileInfo
                        text="Previstas"
                        value={relatorio.qtdCobrancasPrevistas}
                        color="#5197B5"
                      />
                      <TileInfo
                        text="Vencidas"
                        value={relatorio.qtdCobrancasVencidas}
                        color="#FF4D4D"
                      />
                      <TileInfo
                        text="Pagas"
                        value={relatorio.qtdCobrancasPagas}
                        color="#4EC06E"
                      />
                    </MiniCard>
                  </>
                )}
              </div>
            </div>

            <div className="column column--full">
              <Card iconUrl="/images/graph.svg" title="Faturamento">
                <Tabs>
                  <TabButton
                    textButton="Por mês"
                    handleTabButton={() => handleTabButton("11-05-2020")}
                    active
                  />
                  <TabButton
                    textButton="Por dia"
                    handleTabButton={() => handleTabButton("12-05-2020")}
                  />
                </Tabs>
                <Chart />
              </Card>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
