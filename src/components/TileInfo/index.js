import React from "react";

import "./styles.css";

export default function TileInfo({ text, value, color }) {
  return (
    <div
      className="tile__info"
      style={color ? { borderColor: color, color: color } : {}}
    >
      <span className="tile__info--text">{text}</span>
      <span className="tile__info--value">{value}</span>
    </div>
  );
}
