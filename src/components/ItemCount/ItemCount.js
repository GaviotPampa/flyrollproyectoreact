import Button from "../Button/button";
import React, { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock, initial, onAddToCart }) {
  const [valor, setValor] = useState(initial);

  const sumar = () => {
    if (valor < stock) {
      setValor(valor + 1);
    }
  };

  const res = () => {
    setValor(initial);
  };

  const restar = () => {
    if (valor > initial) {
      setValor(valor - 1);
    }
  };

 
  return (
    <>
      <div className="contador">
        <Button  onClick={restar} >-</Button>
        <>
        <span> {valor} </span>
        </>
        <Button onClick={sumar}>+</Button>
        <Button onClick={res}>restablecer</Button>
      </div>
      
      <Button onClick={() => onAddToCart(valor)} >
        Agregar al carrito
      </Button>
    </>
  );
}

export default ItemCount;
