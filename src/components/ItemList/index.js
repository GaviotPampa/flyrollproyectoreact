import Item from "../Item";
import React from "react";

/* import { defaults } from "gh-pages";
 */

 function ItemList({ products=[products] }) {
  return (
        <div>
        {products.map(
          (product) => {  
            return (
              <Item key= {products.id} products={product} />  
            )
        
          }
                           
          )
        }
         </div>  
    
  )
}
export default ItemList;