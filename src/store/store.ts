import { configureStore } from "@reduxjs/toolkit";
import pizzas from "./slice/pizzasSlice";

export const store = configureStore({
  reducer: {
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
