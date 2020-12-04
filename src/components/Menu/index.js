import "./styles.css";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/home" className="menu__link">
            <span>
              <img
                src="http://localhost:3000/images/home.svg"
                alt="Página incial"
              />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/charges" className="menu__link">
            <span>
              <img
                src="http://localhost:3000/images/money.svg"
                alt="Cobranças"
              />
            </span>
            Cobranças
          </Link>
        </li>
        <li>
          <Link to="/customers" className="menu__link">
            <span>
              <img
                src="http://localhost:3000/images/group.svg"
                alt="Clientes"
              />
            </span>
            Clientes
          </Link>
        </li>
      </ul>
    </div>
  );
}
