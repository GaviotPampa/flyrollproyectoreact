import React from "react";
import CartWidget from './CartWidget';
import './styles.css';

function Navbar() {
    return (
      <div>
         <div className="nav-menu">
            <div>
               <a href="">
                   <img src="./public/flyrolllogo.jpg" alt="Tienda Fly Roll" />
               </a>
            </div>
               <ul className="menu">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Productos</a></li>
                  <li><a href="#">Contactanos</a></li>
               </ul>
         </div>
         <div className="right">
             <CartWidget />
         </div>
      </div>
         
    );  
}

export default Navbar; 