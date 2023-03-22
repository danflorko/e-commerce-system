import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types";

export interface CartState {
  cart: IProduct[],
};

export const initialCartState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.price += itemInCart.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if(item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--;
        }
      }
      
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },

    removeAllItems: (state) => {
      state.cart = [];
    },
  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAllItems,
} = actions;
