import React from "react";
import flyrolllogo from "./../assets/logo/flyrolllogo.jpg";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <div className="navcontainer">
      <div className="nav-menu">
        <div>
          <Link to="/">
            <img className="logo" src={flyrolllogo} alt="Tienda Fly Roll" />
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
       
          <li>
            <NavLink to={"/category/roller"} className={({isActive})=> isActive ? "active" : ""} >Roller</NavLink>
          </li>
          <li>
            <NavLink to={"/category/accesorios"}className={({isActive})=> isActive ? "active" : ""} >Accesorios</NavLink>
          </li>

          <li>
            <Link to="/contacto">Contactanos</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <Link to= "">
        <CartWidget />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
