import Item from "../Item";
import { Link } from "react-router-dom";
import React from "react";

/* import { defaults } from "gh-pages";
 */

 function ItemList({ products }) {
  return (
    <div className="item-list-container">
      <ul className="item-List">
        {products.map(
          (product) => (
            /*item*/
            (<Item product= {products} /> ),
            (
              <li >
                <img src={product.img} alt={product.tittle} />
                <h4>{product.title} </h4>
                <small> {product.description} </small>
                <p>${product.precio} </p>
                <Link to={`/detalle/${product.id}`}>
                  <button>Ver más detalles</button>
                </Link>
              </li>
            )
          )
        )}
        
      </ul>
    </div>
  );
}
export default ItemList;