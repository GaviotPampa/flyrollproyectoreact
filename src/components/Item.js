import { Link } from "react-router-dom";
import React from "react";

const Item = ({products}) => {
    return (

      <>
      <div className="item-list-container">
        <ul className="Item-List">
         
          <li key={products.id}> 
              <img src={products.img} alt = {products.tittle}/>
              <h4>{products.title} </h4>
              <small> {products.description} </small>
              <p>${products.precio} </p>
              <Link to={`${products.id}`}>
                <button>Ver más detalles</button>
              </Link>
          </li>
        </ul>
      </div>
      </>
);
};

export default Item;
 
