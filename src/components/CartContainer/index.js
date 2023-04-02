import React, { useContext } from "react";
import cartContext from "../../context/cartContext";
import products from "../products/products";
import "./cartcontainer.css";
import CheckoutCart from "./CheckoutCart";

function CartContainer() {
  const { cart, deleteProduct, total } = useContext(cartContext);
 
    
  /* 
  if (cart.length === 0) */
  return (
    <>
    <div className="h_unocarrito">
    <h1 >Mi Carrito</h1>
    <a className="dropdown-item" href="/">Seguir comprando</a>
      
    </div>
    

      {cart.map((products) => {
        return (
          
          <>
            <div key={products.id} className="itemCarrito">
              <img
                className="itemCarrito_img"
                src={products.img}
                alt={products.tittle}
              />

              <div className=" carrito-producto">
                <p>Producto:</p>
                <p>{products.tittle}</p>
              </div>
              <div className="carrito-producto">
                <p>Precio:</p>
                 <strong> ${products.precio}</strong>
              </div>
              <div className="carrito-producto">
                <p>Cantidad</p>
                <strong>{products.valor} u</strong>
              </div>
              <div className="carrito-producto">
                <p>Subtotal</p>
                <strong >
                  ${total}
                </strong>
              </div>
              <button                          className="btn btn-outline-dark carrito-producto-eliminar_item"
              onClick={() => deleteProduct(products.id)}
              >
                Eliminar
              </button>
            </div>
            <hr/>
          </>
        );
      })}

      <div className="compra">
        <h4 >El total de tu compra es de ${total} </h4>
        <CheckoutCart cart={cart} />
      </div>
    </>
  );
}

export default CartContainer;
