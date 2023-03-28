import {
    put,
    call,
    takeEvery,
    PutEffect,
    CallEffect,
    SagaReturnType,
    ForkEffect,
} from "redux-saga/effects";
import ActionCreators from "../actionCreator";
import { productsService } from "@/app/api/productsService";
import { REACT_APP_HOSTNAME, REACT_APP_HOST_PORT } from "@/app/utils/constants";
import type { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "@/app/types";

// Define the worker saga function to handle fetching products
export function* getPostsWorker(
    action: PayloadAction<IProduct[]>
): Generator<
    | CallEffect<SagaReturnType<() => Promise<any>>>
    | PutEffect<AnyAction>
    | PutEffect<PayloadAction<string>>,
    void,
    SagaReturnType<() => Promise<any>>
> {
    try {
        // Call the API function to get products data
        const data = yield call(() =>
            productsService.getProducts(REACT_APP_HOSTNAME, +REACT_APP_HOST_PORT)
        );
        // Dispatch success action with the received products data
        yield put(ActionCreators.productsSuccess(data));
    } catch (e) {
        // Dispatch failure action with the error message
        yield put(ActionCreators.productsFailure(e as string));
    }
}

// Define the watcher saga function to watch for "GET_PRODUCTS" actions and call the worker saga function
export function* getPostsWatcher(): Generator<
    | ForkEffect<PayloadAction<{ host: string, port: number }>>
    | void
    | PayloadAction<{ host: string, port: number }>
> {
    // Call the takeEvery effect to listen to "GET_PRODUCTS" actions and call the worker saga function
    yield takeEvery("GET_PRODUCTS", getPostsWorker);
}
