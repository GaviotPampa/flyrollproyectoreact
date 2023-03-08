import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {<ItemListContainer greeting={"Hazlos Volar 🤩"} />}
            </div>
          }
        />
        <Route path="/detalle" element={<ItemDetailContainer />} />
        <Route
            path="/category/:idCategory"
            element={<ItemListContainer />}
          />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
