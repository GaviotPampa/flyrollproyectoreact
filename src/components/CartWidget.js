import React from "react";
import { BsFillCartFill } from 'react-icons/bs';


function CartWidget() {
  return (
    <a href="#" className="cart-widget">
      <BsFillCartFill className="icon" />
      <span className="numerito" class="numerito">0</span>
    </a>
  );
}

export default CartWidget;