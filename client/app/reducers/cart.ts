import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types";

export interface CartState {
  cart: IProduct[],
};

// define the initial state of the redux card state
export const initialCartState: CartState = {
  cart: [],
};

// Create a slice of the cart store with the reducers functions for modifying state
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) { // adding item to the cart
      // checking if the item is already in the cart
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart) { // if the item is already in the cart, increment its quantity
        itemInCart.price += itemInCart.price;
      } else { // otherwise, add the item to the cart with a quantity of 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => { // increment the quantity of an item in the cart
      // get finded item in the card
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) { // if item is found, increment quantity to 1
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => { // decrement the quantity of an item in the cart
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= Number(item.quantity !== 1)
      }
    },
    removeItem: (state, action) => { // remove an item from the cart
      state.cart = state.cart.filter((item) => item.id !== action.payload);;
    },

    removeAllItems: (state) => { // remove all items from the cart
      state.cart = [];
    },
  },
});

// Extract the reducer and actions from the slice
const { reducer, actions } = cartSlice;

export default reducer;

// export extracted actions from the slice
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAllItems,
} = actions;
