import Item from "../Item";
import React from "react";

/* import { defaults } from "gh-pages";
 */

 function ItemList({ products=[] }) {
  return (
        <>
        {products.map(
          (product => 
            
     
            <Item key= {products.id} products={product} />        
                  
               
            
          )
        )}
         </>  
    
  )
}
export default ItemList;