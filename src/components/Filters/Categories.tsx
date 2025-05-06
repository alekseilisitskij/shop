import { useSearchParams } from "react-router-dom";
import { Sort } from "./Sort";

export const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromURL = +(searchParams.get("category") || 0);

  const handleActive = (i: number) => {
    setSearchParams({ category: i === 0 ? "" : i.toString() });
  };

  const typePizzas: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {typePizzas.map((item, i) => (
            <li
              key={i}
              className={i === categoryFromURL ? "active" : ""}
              onClick={() => handleActive(i)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Sort />
    </div>
  );
};
