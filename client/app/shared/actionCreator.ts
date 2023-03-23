import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
    productsRequest: [],
    productsSuccess: ["products"],
    productsFailure: ["error"]
});

export default Creators;
