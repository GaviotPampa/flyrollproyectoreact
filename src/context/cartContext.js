import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(products, valor) {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (newCart) {
      const isItemRepeat = cart.find((item) => item.id === products.id);
      if (isItemRepeat) {
        return newCart.map((item) => {
          if (
            item.id === products.id
              ? { ...products, valor: isItemRepeat.valor + 1 }
              : item
          );
        });
      } else {
        newCart.push({ ...products, valor });
      }
      setCart(newCart);
    }
  }

  function totalCart() {
    const total = cart.reduce((acc, products) => acc + (products.precio * products.valor),0);
    return (total);
    /* (
    <div className='cartTotal'>
      <h3>total a pagar: {total} $</h3>
    </div>
  ) */
  }

  function deleteProduct(id) {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  }

  return (
    <Provider value={{ cart, addItem, test: "ok", deleteProduct, totalCart }}>
      {children}
    </Provider>
  );
}

export { CartContextProvider };

export default cartContext;
