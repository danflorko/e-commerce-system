import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import type { Store } from "redux";
import type { TypedUseSelectorHook } from "react-redux";

import rootReducer from "../reducers";
import rootWatcher from "./saga";

const rootPersistConfig = {
  key: 'rootStorage',
  storage: typeof window !== 'undefined' ? createWebStorage("local") : {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  },
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware()
const pReducer = persistReducer(rootPersistConfig, rootReducer);

const store: Store = configureStore({
  reducer: pReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware
  ],

});

const persistor = persistStore(store);

(store as any).sagaTask = sagaMiddleware.run(rootWatcher)

export { store, persistor }

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
