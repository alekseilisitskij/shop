import axios from "axios";

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const api = axios.create({
  baseURL: "https://680931041f1a52874cdc292e.mockapi.io",
  headers: {
    "Content-type": "application/json",
  },
});

export const http = () => {
  const getPizzas = (category: string) => {
    return api.get<Pizza[]>(`/restaurants${category}`);
  };

  return { getPizzas };
};
