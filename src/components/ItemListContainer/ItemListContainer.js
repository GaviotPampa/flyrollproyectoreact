import ItemList from "../ItemList/ItemList";
import products from "../../products/Products";
import { useState, useEffect, productParams } from "react";
import "./../styles.css";

function getItemFromDataProducts() {
  return new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
      if (error === true) reject ("Error leyendo los datos");
      resolve (products);
    }, 1000);
  });
}

function getItemByCategoryFromDataProducts(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productFilter = products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productFilter);
    }, 1000);
  });
}
///////////////////////////////////////
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const params = productParams();
  const idCategory = params.idCategory;
  
  async function leerProdutcs (){
    if ( idCategory === undefined){
      let respuesta = await getItemFromDataProducts ();
      setProducts (respuesta);
    }
    else {
     let respuesta = await getItemByCategoryFromDataProducts (idCategory)
     setProducts(respuesta);

    }
  }
    useEffect(() => {
    leerProdutcs ();
    }, [idCategory]);
   

  return (
    <>
      <div className="item-list-container">
        <h2>{greeting}</h2>
        <ItemList products={products} />
      </div>
    </>
  );
}

export default ItemListContainer;
