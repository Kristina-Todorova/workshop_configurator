import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="Header">
        <Link to="/" style={{ textDecoration: 'none', color:'white' }}>
        <p>
          &nbsp;&nbsp;&nbsp;Mercedes-Benz Consulting&nbsp;&nbsp;|
        </p>
        </Link>
        <p className="store">&nbsp;&nbsp;E-Consulting Store</p>
    </div>
  );
}

export default Header;