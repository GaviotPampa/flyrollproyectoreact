import ItemList from "../ItemList";
import products from "../products/products";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";
import "../styles.css";
import Loader from "../Loader/LoaderPrimary.js";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";



/* function getItemFromDataProducts(){

} */

function getItemFromDataProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
}

function getItemByCategoryFromDataProducts(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productFilter = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productFilter);
    }, 1500);
  });
}
///////////////////////////////////////

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  async function LeerProdutcs() {

    if (idCategory === undefined) {
      let respuesta = await getItemFromDataProducts();
      setProducts(respuesta);
      setLoading (false)

    } else {
      let respuesta = await getItemByCategoryFromDataProducts(idCategory);
      setProducts(respuesta);
      setLoading (false);

    }
  }
  useEffect(() => {
    LeerProdutcs();
  }, [idCategory]);

  return (
    <>
        <h2>{greeting}</h2>
       {/*  {loading && <Loader/>} */}
        <div className="container_main">
         {loading? <Loader/> : <ItemList products={products} />}
        </div>
    </>
  );
}

export default ItemListContainer;
