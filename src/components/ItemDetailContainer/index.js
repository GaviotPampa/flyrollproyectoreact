import "../styles.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Images = require.context ("../../assets/img",true);

function ItemDetailContainer({ greeting }) {
const [products, setProducts] = useState({});
 
const idProduct = useParams();
function getIndividualItem (idItem) { return new Promise((resolve, reject) => {
  setTimeout(() => {
    let productElegido = products.find((item) => item.id === Number(idItem));
    resolve(productElegido);
  }, 2000);
});
}

useEffect(() => {
   getIndividualItem(idProduct).then ((respuesta)=>
   setProducts (respuesta))
}, []);



  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>
        <ul className="item-List">
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