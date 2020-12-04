import React from "react";

import "./styles.css";

export function ListItemStatus({ text, color, icon, handleItemStatus }) {
  return (
    <div className="item__stauts" style={color ? { color: color } : {}}>
      {icon && handleItemStatus && (
        <button onClick={handleItemStatus ? handleItemStatus : null}>
          <img src={icon} alt={text} />
        </button>
      )}
      {text && text}
    </div>
  );
}

export function ListItemIconButton({ alt, icon, handleItemIconButton }) {
  return (
    <div className="item__icon">
      {icon && (
        <button onClick={handleItemIconButton ? handleItemIconButton : null}>
          <img src={icon} alt={alt} />
        </button>
      )}
    </div>
  );
}

export function ListIcon({ alt, icon }) {
  return (
    <div className="item__icon">{icon && <img src={icon} alt={alt} />}</div>
  );
}

export function ListTitleHeader({ text }) {
  return <div className="title__header">{text && text}</div>;
}

export function ListItemText({ text }) {
  return <div className="item__text">{text && text}</div>;
}

export function ListHeader({ children }) {
  return <div className="list__header">{children}</div>;
}

export function ListItem({ children }) {
  return (
    <ul className="list__body">
      <li className="list__item">{children}</li>
    </ul>
  );
}

export function List({ children }) {
  return <div className="list__charges">{children}</div>;
}
