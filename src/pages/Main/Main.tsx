import { FC } from "react";

import { Cart } from "../../components/Cart/Cart";
import { Categories } from "../../components/Filters/Categories";

export const Main: FC = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <Categories />
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items"></div>
          <Cart />
        </div>
      </div>
    </>
  );
};
