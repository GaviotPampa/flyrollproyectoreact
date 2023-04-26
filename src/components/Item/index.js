import "./item.css";
import "../styles.css";
import { Link } from "react-router-dom";
import React from "react";
import ButtonFavorite from "../Button/ButtonFavorite";

const Item = ({ products }) => {
  return (
    <>
      <div className="container_card">
        <li className="card" key={products.id}>
          <ButtonFavorite />

          {products.stock === 0 ? (
            <>
              <img src={products.img} alt={products.tittle} />
              <h3 className="sinStock">{products.tittle} </h3>
              <strong> Este producto está agotado. </strong>
              <small className="productoAgotado">
                Suscríbete a nuestra newsletter y entérate antes que nadie de
                los próximos lanzamientos.
              </small>
              <Link to="*">
                <button>Suscribirme</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={`/detalle/${products.id}`}>
                <img src={products.img} alt={products.tittle} />
              </Link>
              <h3 className="titlelist">{products.tittle}</h3>
              <small>{products.detalle}</small>
              <p>${products.precio}</p>
              <Link to={`/detalle/${products.id}`}>
                <button className="btn_verdetalle">Ver más detalles</button>
              </Link>
            </>
          )}
        </li>
      </div>
    </>
  );
};

export default Item;
