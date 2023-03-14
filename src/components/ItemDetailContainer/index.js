import "../styles.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products/products";
/* 
const Images = require.context("../../assets/img", true); */

function getDetailFromProducts(idProduct) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productElegido = products.find(
        (item) => item.id === Number(idProduct)
      );
      resolve(productElegido);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [products, setProducts] = useState({});

  const { idProduct } = useParams();

  useEffect(() => {
    getDetailFromProducts(idProduct).then((res) => {
      setProducts(res);
    });
  });

  return (
    <>
      <div className="container">
        <li className="card" key={products.id}>
          <div>
            <img src={products.img} alt={products.tittle} />
          </div>
          <h3>{products.tittle}</h3>
          <small>{products.description}</small>
          <p>${products.precio} </p>
          <Link to="">{<button>Agregar al carrito</button>}</Link>
        </li>
      </div>
    </>
  );
}
export default ItemDetailContainer;
