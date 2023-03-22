import { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const rootPersistConfig = {
  key: 'rootStorage',
  storage,
  whitelist: ["cart"],
};

const pReducer = persistReducer(rootPersistConfig, rootReducer);

const store: Store = configureStore({
  reducer: pReducer,
  devTools: true,
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
