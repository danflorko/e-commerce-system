import { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from "../reducers";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const makeStore: Store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof makeStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;