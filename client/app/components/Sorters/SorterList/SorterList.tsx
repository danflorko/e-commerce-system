'use client';

import { useContext } from 'react';
import type { FC } from 'react';

import { SortType } from '@/app/types/enums';
import { ProductsContext } from '@/app/utils/context/context';
import { Dropdown } from '../Dropdowns';
import type { IProduct } from '@/app/types';

import './SorterList.scss';

interface SorterListProps {
  products: IProduct[];
}

const SorterList: FC<SorterListProps> = ({ products }) => {
  const { sortType, setSortType, color, setColor } = useContext(ProductsContext);

  const sorters = [
    {
      sorterId: 1,
      sorterName: 'Sort by price',
      sortOptions: [
        SortType.Cheapest, SortType.Expensive,
      ],
      sortField: sortType,
      handleSortBy: (value: SortType) => {
        setSortType(value);
      },
    },
    {
      sorterId: 2,
      sorterName: 'Color ',
      sortOptions: ['All', ...products.map(product => product.color)],
      sortField: color,
      handleSortBy: (value: SortType) => {
        setColor(value);
      },
    },
  ];



  return (
    <div className="sorter-list">
      {sorters.map(sorter => (
        <Dropdown
          key={`filter-${sorter.sorterId}`}
          title={sorter.sorterName}
          field={sorter.sortField}
          options={sorter.sortOptions}
          onSelect={sorter.handleSortBy}
        />
      ))}
    </div>
  );
}

export default SorterList;