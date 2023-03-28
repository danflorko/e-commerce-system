import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
    // This action is dispatched when the request for products is made
    productsRequest: [],
    // This action is dispatched when products are successfully fetched
    productsSuccess: ["products"],
    // This action is dispatched when there's an error fetching products
    productsFailure: ["error"]
});

export default Creators;