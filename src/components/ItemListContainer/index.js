import ItemList from "../ItemList";
import products from "../products/products";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";
import "../styles.css";


function getItemFromDataProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

function getItemByCategoryFromDataProducts(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productFilter = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productFilter);
    }, 2000);
  });
}
///////////////////////////////////////

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  async function LeerProdutcs() {
    if (idCategory === undefined) {
      let respuesta = await getItemFromDataProducts();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemByCategoryFromDataProducts(idCategory);
      setProducts(respuesta);
    }
  }
  useEffect(() => {
    LeerProdutcs();
  }, [idCategory]);

  return (
    <>
        <h2>{greeting}</h2>
        <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
