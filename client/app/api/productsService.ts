import { IProduct } from "@/app/types";

export const productsService = {
  getProducts: async (host: string, port: number) => {
    const res = await fetch(`http://${host}:${port}/products`);
    const products = await res.json();

    if (!products) {
      throw new Error('Can not load the products')
    }

    return products as IProduct[];
  }
}
