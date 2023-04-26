import { Link } from "react-router-dom";
import { BsCart, BsCartCheck } from "react-icons/bs";
import "./cartwidget.css";
import "../styles.css";
import { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);

  const [cartCount, setCartCount] = useState(0);

  /* Cada vez que se modifica el carrito, actualizamos la cantidad de productos */
  useEffect(() => {
    setCartCount(
      cart?.reduce((previous, current) => previous + current.quantity, 0)
    );
  }, [cart]);

  return (
    <Link to="/cart" className="cart-widget">
      {cartCount === 0 ? (
        <span>{<BsCart className="icon" />}</span>
      ) : (
        <>
          <BsCartCheck className="icon" />
          <span className="numerito">{cartCount}</span>
        </>
      )}
    </Link>
  );
}

export default CartWidget;
