'use client';

import { SortType } from '@/app/types/enums';
import { ProductsContext } from '@/app/utils/context/context';
import { FC, useContext } from 'react';
import { Dropdown } from '../Dropdowns';

import './SorterList.scss';

interface SorterListProps {

}

const SorterList: FC<SorterListProps> = () => {
  const { sortType, setSortType, color, setColor } = useContext(ProductsContext);
  const sorters = [
    {
      sorterId: 1,
      sorterName: 'Sort by price',
      sortOptions: [
        'None', 'Cheapest', 'Expensive',
      ],
      sortField: sortType,
      handleSortBy: (value: SortType) => {
        setSortType(value);
      },
    },
    {
      sorterId: 2,
      sorterName: 'Color ',
      sortOptions: [
        'None',
        'black',
        'silver',
        'gold',
        'yellow',
        'green',
        'midnightgreen',
        'spacegray',
        'red',
        'white',
        'purple',
        'coral',
        'rosegold'
      ],
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
          key={sorter.sorterId}
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