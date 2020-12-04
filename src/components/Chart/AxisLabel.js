import React from "react";

import "./styles.css";

const style = {
  display: "inline-block",
  width: "100%",
  color: "#808080",
};

const rotateStyles = {
  transform: "rotate(-90deg)",
  transformOrigin: "center",
};

const Label = ({ text, rotate }) => (
  <div>
    <span className="vertical__text">{text}</span>
  </div>
);

export default Label;
