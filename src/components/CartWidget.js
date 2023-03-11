import { Link } from "react-router-dom";
import React from "react";
import { BsFillCartFill } from 'react-icons/bs';
import './styles.css';


function CartWidget() {
  return (
    <Link to="#" className="cart-widget">
      <BsFillCartFill className="icon" />
      <span className="numerito">0</span>
    </Link>
  );
}

export default CartWidget;