import React from "react";
import CartWidget from './CartWidget';
import {  } from "./styles.css";
function NavBar() {
    return (
        <div>
            <div >
                <a href="">
                    <img src="./public/flyrolllogo.jpg" alt="Tienda Fly Roll" />

                </a>
                <ul className="nav-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>

            </div>
            <div className="right">
                <CartWidget />
            </div>
        </div>
    ); 
} 
        
export default NavBar;