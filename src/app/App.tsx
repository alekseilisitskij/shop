import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main/Main";
import { Header } from "../components/Header/Header";
import { CartEmpty } from "../pages/ShoppingCartEmpty/ShoppingCartEmpty";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="qwe" element={<CartEmpty />} />
            <Route path="asd" element={<ShoppingCart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
