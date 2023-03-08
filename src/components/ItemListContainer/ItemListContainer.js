import ItemList from "../ItemList/ItemList";
import products from "../../products/Products";
import { useState, useEffect, params } from "react";
import "./../styles.css";

function getItemFromDataProducts(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productFilter = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productFilter);
    }, 1000);
  });
}
///////////////////////////////////////
function ItemListContainer({ greeting }) {
  const [products, setproducts] = useState([]);

  const params = productParams();
  const idCategory = params.idCategory;
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(idCategory);
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
