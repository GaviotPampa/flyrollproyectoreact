import Item from "../Item";
import React from "react";

function ItemList({ products }) {
  return (
    <>
      {products.map((product) => {
        return <Item key={products.id} products={product} />;
      })}
    </>
  );
}
export default ItemList;
