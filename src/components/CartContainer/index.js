import React, { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./cartcontainer.css";
import CheckoutCart from "./CheckoutCart";

function CartContainer() {
  const { cart, deleteProduct, total } = useContext(cartContext);

  return (
    <>
      <div className="h_unocarrito">
        <h1>Tus productos</h1>
        <div className="seguir_compra">
          <Link className="dropdown-item" to="/">
            Seguir comprando
          </Link>
        </div>
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
                <strong>{products.quantity} u</strong>
              </div>
              <div className="carrito-producto">
                <p>Subtotal</p>
                <strong>
                  $ {parseInt(products.precio) * parseInt(products.quantity)}
                </strong>
              </div>
              <button
                className="btn btn-outline-dark carrito-producto-eliminar_item"
                onClick={() => deleteProduct(products.id, products.quantity)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button>
            </div>
            <hr />
          </>
        );
      })}
      <div className="compra">
        <h4>El total de tu compra: ${total} </h4>
        <CheckoutCart total={total} cart={cart} />
      </div>
    </>
  );
}

export default CartContainer;
