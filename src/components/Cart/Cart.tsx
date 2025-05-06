import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { Buttons } from "../Buttons/Buttons";
import { fetchPizzas } from "../../store/slice/pizzasSlice";
import { AppDispatch } from "../../store/store";
import { Pizza } from "../../api/api";

export const Cart: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pizzas, isLoading, error } = useSelector(
    (state: {
      pizzas: { pizzas: Pizza[]; isLoading: boolean; error: string };
    }) => state.pizzas
  );
  const category = searchParams.get("category");

  useEffect(() => {
    dispatch(fetchPizzas(category));
  }, [dispatch, category]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  let pizza = pizzas.map(
    ({ category, id, imageUrl, price, rating, sizes, title, types }: Pizza) => {
      return (
        <div key={id} className="pizza-block">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
          <div className="pizza-block__selector">
            <ul>
              {types.map((item, i) => (
                <li key={i}>{item ? "традиционное" : "тонкое"}</li>
              ))}
            </ul>
            <ul>
              {sizes.map((item, i) => (
                <li key={i}>{item} см.</li>
              ))}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} руб.</div>
            <Buttons />
          </div>
        </div>
      );
    }
  );
  return <>{pizza}</>;
};
