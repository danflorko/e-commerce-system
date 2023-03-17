import { product } from "@/app/types";

export const productsService = {
  getproducts: async () => {
    const { REACT_APP_HOSTNAME = 'localhost', REACT_APP_HOST_PORT = 8080 } = process.env;

    const res = await fetch(`http://${REACT_APP_HOSTNAME}:${REACT_APP_HOST_PORT}/products`);
    const products = await res.json();

    if (!products) {
      throw new Error('Can not load the products')
    }

    return products as product[];
  }
}