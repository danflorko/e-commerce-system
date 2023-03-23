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

export const INITIAL_STATE: ISagaProductsStore = {
  productsLoading: false,
  productsLoaded: false,
  products: [],
  error: false,
  errorMessage: ""
};

export const productsRequest = (state = INITIAL_STATE): ISagaProductsStore => ({
  ...state,
  productsLoading: true,
  productsLoaded: false
});

export const productsSuccess = (state = INITIAL_STATE, action: PayloadAction<IProduct[]>): ISagaProductsStore => ({
  ...state,
  productsLoading: false,
  productsLoaded: true,
  products: action.products,
  error: false
});

export const productsFailure = (state = INITIAL_STATE, action: PayloadAction<string>): ISagaProductsStore => ({
  ...state,
  productsLoading: false,
  productsLoaded: false,
  products: [],
  error: true,
  errorMessage: action.errorMessage
});

export const productsHydrate = (state = INITIAL_STATE, action: PayloadAction<ISagaProductsStore>): ISagaProductsStore => ({
  ...state,
  ...action.payload
});

export const reducer = createReducer<ISagaProductsStore, PayloadAction<ActionType>>(INITIAL_STATE, {
  [Types.PRODUCTS_REQUEST]: productsRequest,
  [Types.PRODUCTS_SUCCESS]: productsSuccess,
  [Types.PRODUCTS_FAILURE]: productsFailure,
});

export default reducer