import React from "react";
import Label from "./AxisLabel";
import ChartTitle from "./ChartTitle";
import LineChart from "./LineChart";

const data = [
  { label: "janeiro", x: 0, y: 0 },
  { label: "fevereiro", x: 1, y: 400 },
  { label: "março", x: 2, y: 300 },
  { label: "abril", x: 3, y: 100 },
  { label: "maio", x: 4, y: 400 },
  { label: "junho", x: 5, y: 500 },
];

const styles = {
  chartComponentsContainer: {
    display: "flex",
    alignItems: "center",
  },
  chartWrapper: { width: "100%" },
};

export default function Chart({ title }) {
  return (
    <>
      <div style={styles.chartComponentsContainer}>
        <div />
        <Label text="Valor em Reais R$" rotate />
        <div style={styles.chartWrapper}>
          <LineChart
            width={1300}
            height={600}
            data={data}
            horizontalGuides={10}
            precision={1}
            verticalGuides={3}
          />
        </div>
        <div />
      </div>
      <center>
        <p>Meses do Anos</p>
      </center>
    </>
  );
}
