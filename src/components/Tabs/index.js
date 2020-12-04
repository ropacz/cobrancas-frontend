import React from "react";
import "./styles.css";

export function TabButton({ textButton, active, handleTabButton }) {
  return (
    <button
      onClick={handleTabButton}
      className={`tab__btn ${active ? "tab__btn--active" : ""}`}
    >
      {textButton}
    </button>
  );
}

export function Tabs({ children }) {
  return (
    <>
      <div className="tabs">{children}</div>
    </>
  );
}
