import "./itemdetail.css";
import "../styles.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products/products";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import LoaderDetail from "../Loader/LoaderDetail";
import LoaderDetailDescription from "../Loader/LoaderDetailDescription";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";

import { collection, getDoc, doc, getFirestore } from "firebase/firestore";

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
async function getDetailFromProducts(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);
 
  return { ...docSnapshot.data(), id: docSnapshot.id };
}

/* function getDetailFromProducts(idProduct) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productElegido = products.find(
        (item) => item.id === Number(idProduct)
      );
      resolve(productElegido);
    }, 2000);
  });
} */

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [isInCart, setisInCart] = useState(false);

  const { idProduct } = useParams();

  useEffect(() => {
    getDetailFromProducts(idProduct).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  });

  const { addItem } = useContext(cartContext);

  function onAddToCart(quantity) {
    setisInCart(true);
    toast.success("🦄 Agregaste tu producto !", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "toast-message",
    });
    addItem(products, quantity);
  }

  return (
    <div className="container_card_detail">
      <li className="card card_detail" key={products.id}>
        {loading ? (
          <LoaderDetail />
        ) : (
          <img
            className="container_card_producto"
            src={products.img}
            alt={products.tittle}
          />
        )}
      </li>
      <div className="container_description">
        {loading ? (
          <LoaderDetailDescription />
        ) : (
          <>
            <ToastContainer />
            <h3>{products.tittle}</h3>
            <div>
              <small className="description">{products.description}</small>
            </div>
            <p>${products.precio} </p>
          </>
        )}
        <ItemCount
          onAddToCart={onAddToCart}
          stock={products.stock}
          initial={1}
        />
        <div>
          <Link className="dropdown-item continuarcompra" to="/">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailContainer;
