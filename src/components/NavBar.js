import React from "react";
import CartWidget from './CartWidget';
import './styles.css';

function NavBar() {
    return (
      <div className="navcontainer">
         <div className="nav-menu">
            <div>
               <a href="">
                   <img className="logo" src="./../../flyrolllogo.jpg" alt="Tienda Fly Roll" />
               </a>
            </div>
               <ul className="menu">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Productos</a></li>
                  <li><a href="#">Contactanos</a></li>
               </ul>
         </div>
         <div className="cart">
             <CartWidget />
         </div>
      </div>
         
    );  
}

export default NavBar; 