import Button from "../Button/button";
import React, { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock, initial, onAddToCart }) {
  const [quantity, setValor] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      setValor(quantity + 1);
    }
  };

  const res = () => {
    setValor(initial);
  };

  const restar = () => {
    if (quantity > initial) {
      setValor(quantity - 1);
    }
  };

  return (
    <>
      <div className="contador">
        <Button onClick={restar}>-</Button>
        <span> {quantity} </span>
        <Button onClick={sumar}>+</Button>
        <Button onClick={res}>restablecer</Button>
      </div>
      <Button onClick={() => onAddToCart(quantity)}>Agregar al carrito</Button>
    </>
  );
}

export default ItemCount;
