import { Main } from "../pages/Main/Main";
import { Header } from "../components/Header/Header";
import { CartEmpty } from "../pages/ShoppingCartEmpty/ShoppingCartEmpty";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";

import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../store/slice/pizzasSlice";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { pizzas, isLoading, error } = useSelector(
    (state: { pizzas: any }) => state.pizzas
  );

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  console.log(pizzas);
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        {/* <CartEmpty /> */}
        {/* <ShoppingCart /> */}
      </div>
    </>
  );
}

export default App;
