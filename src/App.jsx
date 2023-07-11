import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCat" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<h2>Next step!</h2>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
