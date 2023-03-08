import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function ItemDetailContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getProducts.then((res) => setProducts(res));
  }, []);
  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>
        <ul className="Item-List">
          <li key={products.id}>
            <img src={products.id} alt={products.tittle} />
            <h4>{products.title}</h4>
            <small>{products.description}</small>
            <p>${products.precio} </p>
            <Link to={<button>Agregar al carrito</button>}></Link>
          </li>
        </ul>
      </div>
    </>
  );
}
