'use client';

import { SortType } from "@/app/types/enums";
import React, { ReactNode, useState } from "react";

interface IProducts {
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
  color: string;
  setColor: (SortType: SortType) => void;
};

export const ProductsContext = React.createContext<IProducts>({
  sortType: SortType.Cheapest,
  setSortType: () => { },
  color: 'All',
  setColor: () => { },
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [sortType, setSortType] = useState(SortType.Cheapest);
  const [color, setColor] = useState('All');

  const contextValues = {
    sortType,
    setSortType,
    color,
    setColor,
  };

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};