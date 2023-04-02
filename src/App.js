import "./index.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { CartContextProvider } from "./context/cartContext";
import { exportDataWithBatch } from "./services/firestore";


function App() {
  return (
    <>
    
      <CartContextProvider>
        
        <BrowserRouter>
          <div>
            <NavBar />
          </div>
          <button className="btn_exportar" onClick={exportDataWithBatch}>Exportar</button>

          <Routes>
            <Route
              path="/"
              element={
                <div>{<ItemListContainer greeting={"Hazlos Volar 🤩"} />}</div>
              }
            />
            <Route
              path="/detalle/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route
              path="/checkout/:id"
              element={<h3>Gracias por tu compra</h3>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
       
      </CartContextProvider>
    </>
  );
}

export default App;
