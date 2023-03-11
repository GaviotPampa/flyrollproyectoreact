import ItemList from "../ItemList/ItemList";
import Products from "../../products/Products";
import React,{ useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import "../styles.css";

function getItemFromDataProducts() {
  return new Promise((resolve, reject) => {
    let error = false;

    setTimeout(() => {
      if (error === true) reject ("Error leyendo los datos");
      resolve (Products);
    }, 1000);
  });
}

function getItemByCategoryFromDataProducts(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productFilter = Products.filter(
        (item) => item.category === categoryURL
      );
      resolve(productFilter);
    }, 1000);
  });
}
///////////////////////////////////////
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const {idCategory} = useParams ();
  
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
