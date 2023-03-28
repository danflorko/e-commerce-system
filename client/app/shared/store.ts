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

// configuration object for redux-persist for saving some store properties in localStorage
const rootPersistConfig = {
  key: 'rootStorage',
  // Creating nooped localStorage for serverside case
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
  // redux store's property that we want to save in localStorage
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware()

// combine reducers with redux-persist
const pReducer = persistReducer(rootPersistConfig, rootReducer);

// create the redux store
const store: Store = configureStore({
  reducer: pReducer, // pass in the persisted reducer
  devTools: true, // enable Redux DevTools extension
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        // avoid non-serialized data (next.js case)
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware
  ],

});

// initialize redux-persist
const persistor = persistStore(store);

// initialize redux saga (next.js case)
(store as any).sagaTask = sagaMiddleware.run(rootWatcher)

export { store, persistor }

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// specially typed useSelector for the our storage itself
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
