import { PayloadAction } from "@reduxjs/toolkit";
import { createReducer } from "reduxsauce";
import { IProduct } from "../types";
import { Types } from "../shared/actionCreator";
import { ActionType } from "@redux-saga/types";

export interface ISagaProductsStore {
  productsLoading: boolean
  productsLoaded: boolean
  products: IProduct[]
  error: boolean
  errorMessage: string
}

// define the initial state of the Saga products state
export const INITIAL_STATE: ISagaProductsStore = {
  productsLoading: false,
  productsLoaded: false,
  products: [],
  error: false,
  errorMessage: ""
};

// define the entry reducer function for getting products from the server
export const productsRequest = (state = INITIAL_STATE): ISagaProductsStore => ({
  ...state,
  productsLoading: true,
  productsLoaded: false
});

// define the reducer function that will call in the succeed data request case
export const productsSuccess = (state = INITIAL_STATE, action: PayloadAction<IProduct[]>): ISagaProductsStore => ({
  ...state,
  productsLoading: false,
  productsLoaded: true,
  products: action.products,
  error: false
});

// define the reducer function that will call in the failed data request case
export const productsFailure = (state = INITIAL_STATE, action: PayloadAction<string>): ISagaProductsStore => ({
  ...state,
  productsLoading: false,
  productsLoaded: false,
  products: [],
  error: true,
  errorMessage: action.errorMessage
});

// define the main reducer function using reduxsauce createReducer, which takes an object that maps action types to reducer functions
export const reducer = createReducer<ISagaProductsStore, PayloadAction<ActionType>>(INITIAL_STATE, {
  [Types.PRODUCTS_REQUEST]: productsRequest,
  [Types.PRODUCTS_SUCCESS]: productsSuccess,
  [Types.PRODUCTS_FAILURE]: productsFailure,
});

export default reducer