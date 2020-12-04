import React from "react";
import "./styles.css";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2em",
      }}
    >
      <div className="loader"></div>
    </div>
  );
}
