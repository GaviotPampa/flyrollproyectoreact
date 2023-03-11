import "../styles.css";
import products from "../../products/Products";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

 function ItemDetailContainer({ greeting }) {
  const [products, setProducts] = useState({});
 
 const idProduct = useParams();
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
export default ItemDetailContainer;