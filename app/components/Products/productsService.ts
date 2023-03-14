import { product } from "@/app/types";

export const productsService = {
  getproducts: async () => {
    const res = await fetch('http://localhost:8080/products');
    const products = await res.json();

    if (!products) {
      throw new Error('Can not load the products')
    }

    return products as product[];
  }
}