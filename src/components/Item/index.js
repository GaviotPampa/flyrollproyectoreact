import "./item.css";
import "../styles.css";
import { Link } from "react-router-dom";
import React from "react";
import products from "../products/products";
import ButtonFavorite from "../Button/ButtonFavorite";
/* 
const Images = require.context ("../../assets/img",true); */

const Item = ({ products }) => {
  return (
    <>
      <div className="container_card">
        <li className="card" key={products.id}>
          <ButtonFavorite />
          <img src={products.img} alt={products.tittle} />

          {products.stock === 0 ? (
            <>
              <h3 className="sinStock">{products.tittle} </h3>

              <strong> Este producto está agotado. </strong>
              <small className="productoAgotado">
                Suscríbete a nuestra newsletter y entérate antes que nadie de
                los próximos lanzamientos.
              </small>
              <Link to="*" >
              <button>Suscribirme</button>
              </Link>
            </>
          ) : (
            <>
              <h3>{products.tittle} </h3>
              <small>{products.detalle}</small>
              <p>${products.precio}</p>
              <Link to={`/detalle/${products.id}`}>
                <button className="btn_verDetalle">Ver más detalles</button>
              </Link>
            </>
          )}
        </li>
      </div>
    </>
  );
};

export default Item;
