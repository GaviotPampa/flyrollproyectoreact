import Item from "../Item";
import { Link } from "react-router-dom";
import React from "react";

/* import { defaults } from "gh-pages";
 */
export default function ItemList({ products }) {
  return (
    <div className="item-list-container">
      <ul className="item-List">
        {products.map(
          (product) => (
            /*item*/
            (<Item products={product} />),
            (
              <li key={products.id}>
                <img src={products.img} alt={products.tittle} />
                <h4>{products.title} </h4>
                <small> {products.description} </small>
                <p>${products.precio} </p>
                <Link to={`${products.id}`}>
                  <button>Ver más detalles</button>
                </Link>
              </li>
            )
          )
        )}
        ;
      </ul>
    </div>
  );
}
