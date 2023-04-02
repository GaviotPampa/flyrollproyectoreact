import { Link } from "react-router-dom";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./cartwidget.css";
import "../styles.css";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

function CartWidget() {
  const {cart, test} = useContext (cartContext);

  const cartCount = cart.length;

  return (
    <>
   
     <Link to="/cart" className="cart-widget" >
        <BsFillCartFill className="icon" />
        <span className="numerito" >{cartCount}</span>
      </Link>
      
    </>
  );
}

export default CartWidget;
