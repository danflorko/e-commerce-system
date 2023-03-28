import type { IProduct } from "@/app/types";

// create an API fetching map in service pattern
export const productsService = {
  // define the method for getting products from the server
  getProducts: async (host: string, port: number) => {
    const res = await fetch(`http://${host}:${port}/products`); // do request
    const products = await res.json(); // deserialize response

    if (!products) { // check if products had got
      throw new Error('Can not load the products')
    }

    return products as IProduct[];
  }
}
