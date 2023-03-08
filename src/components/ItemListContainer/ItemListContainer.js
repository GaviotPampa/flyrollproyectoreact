import ItemList from "../ItemList/ItemList";
import products from "../../products/Products";
import { useState, useEffect } from "react";
import "./../styles.css";

function ItemListContainer({ greeting }) {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getProducts.then((res) => setproducts(res));
  }, []);
  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>
        <ItemList products={products} />
      </div>
    </>
  );
}

export default ItemListContainer;
