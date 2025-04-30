import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http, Pizza } from "../../api/api";

const { getPizzas } = http();

interface IinitialState {
  pizzas: Pizza[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IinitialState = {
  pizzas: [],
  isLoading: false,
  error: null,
};

export const fetchPizzas = createAsyncThunk<Pizza[]>(
  "pizzas/fetchpizzas",
  async () => {
    const response = await getPizzas();
    return response.data;
  }
);

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pizzas = [...action.payload];
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Что-то пошло не так";
      })
      .addDefaultCase(() => {});
  },
});

export default pizzasSlice.reducer;
