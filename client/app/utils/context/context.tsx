'use client';

import React, { ReactNode, useState } from "react";
import type { FC } from 'react';
import { SortType } from "@/app/types/enums";

interface IProducts {
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
  color: string;
  setColor: (SortType: SortType) => void;
};

// creating React Context for sorting and filtering the products grid
export const ProductsContext = React.createContext<IProducts>({
  sortType: SortType.Cheapest,
  setSortType: () => { },
  color: 'All',
  setColor: () => { },
});

type Props = {
  children: ReactNode;
};

// creating a Context Provider wrapper React component 
export const UserContextProvider: FC<Props> = ({ children }) => {
  // define sort flag state
  const [sortType, setSortType] = useState(SortType.Cheapest);
  // define the filter value state
  const [color, setColor] = useState('All');

  return (
    <ProductsContext.Provider
      value={{ // set control variables to the provider to add an access to them in whole applcatiom
        sortType,
        setSortType,
        color,
        setColor,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
