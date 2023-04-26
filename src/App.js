import "./index.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import CheckOut from "./pages/CheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { CartContextProvider } from "./context/cartContext";
import { exportData, exportDataWithBatch } from "./services/firestore";
import CheckoutForm from "./components/CartContainer/CheckoutForms";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <div>
            <NavBar />
          </div>
          {/* <button className="btn_exportar" onClick={exportData}>Exportar</button> */}

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
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/gracias/:id" element={<CheckOut/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
