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
        const data = yield call(() =>
            productsService.getProducts(REACT_APP_HOSTNAME, +REACT_APP_HOST_PORT)
        );
        yield put(ActionCreators.productsSuccess(data));
    } catch (e) {
        yield put(ActionCreators.productsFailure(e as string));
    }
}


export function* getPostsWatcher(): Generator<
    | ForkEffect<PayloadAction<{ host: string, port: number }>>
    | void
    | PayloadAction<{ host: string, port: number }>
> {
    yield takeEvery("GET_PRODUCTS", getPostsWorker);
}
