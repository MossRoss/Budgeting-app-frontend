import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <header>
      <div>
        <ul>
          <li className="left">
            <Link to="/transactions">Budgeting App</Link>
          </li>
          <li className="right">
            <Link to="/transactions/new">New Transaction</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
