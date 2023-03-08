import Item from "../Item";
import { Link } from "react-router-dom";
import React from "react";

/* import { defaults } from "gh-pages";
 */
export default function ItemList({products}) {
    
  return (
        
        <div className="item-list-container">
          <ul className="Item-List">
            {products.map ((products) => (
                /*item*/
                <Item products= {products}/>,
                
              <li key={products.id}> 
                  <img src={products.id} alt = {products.tittle}/>
                  <h4>{products.title} </h4>
                  <small>{products.description}</small>
                  <p>${products.precio} </p>
                  <Link to={`/detalle/${products.id}`}>
                    <button>Ver más detalles</button>
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      

    );
    
}

