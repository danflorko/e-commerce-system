'use client';

import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { store } from './shared/store';


type ProdiversProps = {
  children: React.ReactNode,
}

export const Providers: FC<ProdiversProps> = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        {children}
      </Provider>
    </DndProvider>

  );
}