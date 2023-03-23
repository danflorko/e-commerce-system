'use client';
import { Provider } from 'react-redux';
import { END } from 'redux-saga';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import type { FC } from 'react';

import Loading from './loading';
import { store } from './shared/store';

type ProvidersProps = {
  children: React.ReactNode,
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  store.dispatch(store.dispatch({ type: "GET_PRODUCTS" }));
  store.dispatch(END);

  return (
    <>
      <HydrationProvider>
        <Client>
          <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
              {children}
            </Provider>
          </DndProvider>
        </Client>
        <Server>
          <Loading />
        </Server>
      </HydrationProvider>
    </>
  );
}

export default Providers;