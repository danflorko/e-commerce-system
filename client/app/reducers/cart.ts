import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  
};

export const initialCartState: CartState = {

};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {

  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export const {} = actions;