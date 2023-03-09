import "../styles.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemDetailContainer({ greeting }) {
  const [products, setProducts] = useState({});
 
 const params = useParams ();
 const idProduct = params.idProduct;
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        let productElegido = products.find((item) => item.id === Number(idProduct));
        resolve(productElegido);
      }, 2000);
    });
    getProducts.then((res) => setProducts(res));
  }, []);

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>
        <ul className="Item-List">
          <li className="item-card" key={products.id}>
            <img src={products.img} alt={products.tittle} />
            <h4>{`${products.tittle}`}</h4>
            <small>{products.description}</small>
            <p>${products.precio} </p>
            <Link to={<button>Agregar al carrito</button>}></Link>
          </li>
        </ul>
      </div>
    </>
  );
}
