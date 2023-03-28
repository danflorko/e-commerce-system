import { SerializedError } from "@reduxjs/toolkit";

export interface IProduct {
  id: string;
  category: string;
  productId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  quantity: number;
}

export interface ProductsState {
  pending: boolean;
  posts: IProduct[];
  error: string | null | SerializedError;
}
