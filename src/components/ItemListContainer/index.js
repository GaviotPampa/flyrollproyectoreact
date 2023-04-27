import ItemList from "../ItemList";
import products from "../products/products";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";
import "../styles.css";
import Loader from "../Loader/LoaderPrimary";
import { initializeApp } from "firebase/app";
import { collection,getDocs, query, where, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "first-reactproyect2023",
  storageBucket: "first-reactproyect2023.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
  appId: "1:1074029286822:web:8131b6dd69a03b2fc9ab67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getItemFromDataProducts() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemByCategoryFromDataProducts(categoryURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}
/* function getItemFromDataProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
}  */
/* 
function getItemByCategoryFromDataProducts(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productFilter = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productFilter);
    }, 1500);
  });
} */
///////////////////////////////////////

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  async function LeerProdutcs() {
    if (idCategory === undefined) {
      let respuesta = await getItemFromDataProducts();
      setProducts(respuesta);
      setLoading(false);
    } else {
      let respuesta = await getItemByCategoryFromDataProducts(idCategory);
      setProducts(respuesta);
      setLoading(false);
    }
  }
  useEffect(() => {
    LeerProdutcs();
  }, [idCategory]);

  return (
    <>
      <h2>{greeting}</h2>
      <div className="container_main">
        {loading ? <Loader /> : <ItemList products={products} />}
      </div>
    </>
  );
}

export default ItemListContainer;
