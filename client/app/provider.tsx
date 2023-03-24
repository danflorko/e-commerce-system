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

// define the Providers React component wrapper for Redux Store and Drag'n'Drop
const Providers: FC<ProvidersProps> = ({ children }) => {
  // initial saga dispatch
  store.dispatch(store.dispatch({ type: "GET_PRODUCTS" }));
  store.dispatch(END); // stop saga on server (for start it on client)

  // HydrationProvider is avoiding the serverside dnd and redux-saga problems
  // DndProvider add an ability to use drag and drop functionality
  // react-redux Provider component connect store to whole application
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