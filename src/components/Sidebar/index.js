import { Link } from "react-router-dom";
import "./styles.css";

export default function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <img src="http://localhost:3000/images/logo-white.svg" alt="Logo" />
        </div>
      </div>
      {children}
      <div className="sidebar__body">
        <Link to="/charges/add" className="btn btn--confirm">
          {" "}
          Criar cobrança{" "}
        </Link>
      </div>
    </div>
  );
}
