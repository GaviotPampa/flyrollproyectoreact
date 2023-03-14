import "./item.css";
import "../styles.css";
import { Link } from "react-router-dom";
import React from "react";
import cascouno from "../../assets/img/cascouno.jpg";
/* 
const Images = require.context ("../../assets/img",true); */

const Item = ({ products }) => {
  return (
    <>
      <div className="container">
        <li className="card" key={products.id}>
          <img src={cascouno} alt={products.tittle} />
          <h3>{products.tittle} </h3>
          <small>{products.description}</small>
          <p>${products.precio}</p>
          <Link to={`/detalle/${products.id}`}>
            <button>Ver más detalles</button>
          </Link>
        </li>
      </div>
    </>
  );
};

export default Item;
