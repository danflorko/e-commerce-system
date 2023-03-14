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
  sortType: SortType.None,
  setSortType: () => {},
  color: 'None',
  setColor: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [sortType, setSortType] = useState(SortType.None);
  const [color, setColor] = useState('None');

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