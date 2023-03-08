import React from "react";
import flyrolllogo from "./../assets/logo/flyrolllogo.jpg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <div className="navcontainer">
      <div className="nav-menu">
        <div>
          <Link to="">
            <img className="logo" src={flyrolllogo} alt="Tienda Fly Roll" />
          </Link >
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/detalle">Detalle</Link>
          </li>
          <li>
            <Link to="/contacto">Contactanos</Link >
          </li>
      
          
        </ul>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
