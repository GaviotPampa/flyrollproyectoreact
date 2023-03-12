import "../styles.css";
import { Link } from "react-router-dom";
import React from "react";

const Images = require.context ("../../assets/img",true);

const Item = ({ products }) => {
  return (
    <>
     
      <div className="item-list-container">
        <ul className="item-List">
        <li key={products.id}>
                <img src={Images ("./casco1.jpg")} alt=""/>
                <h4>{products.tittle} </h4>
                <small> {products.description} </small>
                <p>${products.precio} </p>
                <Link to={`/detalle/${products.id}`}>
                  <button>Ver más detalles</button>
                </Link>
              </li>
        </ul>
      </div>
    </>
  );
}

export default Item;
