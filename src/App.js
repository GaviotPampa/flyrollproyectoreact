import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route
          path="/"
          element={
            <div>
              {<ItemListContainer greeting={"Hazlos Volar 🤩"} />}
            </div>
          }
        />
        <Route path="/detalle/:idProduct" element={<ItemDetailContainer />} />
        <Route
            path="/category/:idCategory"
            element={<ItemListContainer />}
          />
        <Route path = "*" element= { <NotFound />}/>
      </Switch>

    </BrowserRouter>
    </>
  );
}

export default App;
