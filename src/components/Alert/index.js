import React from "react";

import "./styles.css";

export default function Alert({ type, message, color }) {
  return (
    <div className="alert">
      <span
        className="alert__closed"
        style={color ? { backgroundColor: color } : {}}
      >
        &times;
      </span>
      <strong>{type}</strong> {message}
    </div>
  );
}
