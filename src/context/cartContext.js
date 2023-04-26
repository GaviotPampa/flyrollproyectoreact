import { createContext, useState } from "react";
import swal from "sweetalert2";

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(0)


  function addItem(products, quantity) {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (newCart) {
      const isItemRepeat = cart.find((item) => item.id === products.id);
      if (isItemRepeat) {
        return newCart.map((item) => {
          if (
            item.id === products.id
              ? { ...products, quantity: isItemRepeat.quantity + 1 }
              : item
          );
        });
      } else {
        newCart.push({ ...products, quantity });
      }
      setCart(newCart);
    }
  }

  const total = cart?.reduce(
    (previous, products) => previous + products.quantity * products.precio,
    0
  );

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  } /* 
 function removeItem(id) {
  const removeId = cart.findIndex ( products => products.id === id);

  cart.splice (cart.findIndex ( products => products.id === id),1)
  setCart (removeId)
  
 } */
  function deleteProduct(id) {
    const foundId = cart.find((products) => products.id === id);

    const newCart = cart.filter((products) => {
      return products !== foundId;
    });
    swal
      .fire({
        background: "yellow",
        icon: "warning",
        iconColor: "red",
        title: "¿Estás seguro de que quieres eliminarlo?",
        confirmButtonText: "Sí, eliminalo!",
        confirmButtonColor: "black",
        showCancelButton: true,
        cancelButtonColor: "grey",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            title: "Eliminado!",
            text: "Tu producto ha sido removido del carrito.",
            icon: "success",
            confirmButtonColor: "black",
          });
        }
      });

    setCart(newCart);
  }

  function clearCart() {
    setCart ([])
    setProducts (0)

  }

  return (
    <Provider
      value={{ cart, addItem,deleteProduct, total, isInCart,products  }}
    >
      {children}
    </Provider>
  );
}

export { CartContextProvider };

export default cartContext;
