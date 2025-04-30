import { Buttons } from "../Buttons/Buttons";
import pizzaChis from "../../assets/img/pizzachis.png";

export const Cart = () => {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={pizzaChis} alt="Pizza" />
      <h4 className="pizza-block__title">Чизбургер-пицца</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от 395 ₽</div>
        <Buttons />
      </div>
    </div>
  );
};
