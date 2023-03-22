import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductsState } from "../types";

export const initialProductsSagaState: ProductsState = {
  pending: false,
  posts: [],
  error: null,
};

export const productsSagaSlice = createSlice({
  name: "productsSaga",
  initialState: initialProductsSagaState,
  reducers: {},
});

const { reducer, actions } = productsSagaSlice;
export default reducer;
export const {} = actions;
