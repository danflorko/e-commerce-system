'use client';
import { SortType } from '@/app/types/enums';
import { ProductsContext } from '@/app/utils/context/context';
import { FC, useState, useContext, useTransition, useEffect } from 'react';
import React from 'react';
import { product } from '@/app/types';
import ProductItem from '../ProductItem/ProductItem';
import { Pagination } from '../Pagination';

interface ProductsContainerProps {
  products: product[];
}

const ProductsContainer: FC<ProductsContainerProps> = ({ products }) => {
  const { sortType, color } = useContext(ProductsContext);
  const [renderingproducts, setRenderingproducts] = useState<product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const includesQuery = (text: string) => text.toLowerCase()
    .includes(query?.toLowerCase());

  const curPage = currentPage === 1 ? 0 : 16 * (currentPage - 1)

  const handleChange = (event: { target: { value: any; }; }) => {
    const { value } = event.target;
    startTransition(() => {
      setQuery(value);
    })
  };

  const handleCurPage = (numberOfPage: number) => {
    setCurrentPage(numberOfPage);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleNextPage = (lastPage: number) => {
    if (currentPage !== lastPage) {
      setCurrentPage((page) => page + 1);
    }
  };

  useEffect(() => {
    setRenderingproducts(
      products?.filter(product => includesQuery(product.name))
    );

    switch (sortType) {
      case SortType.Cheapest:
        setRenderingproducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        break;
      case SortType.Expensive:
        setRenderingproducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }


    if (color !== 'None' && products) {
      setRenderingproducts((prev) => [...prev].filter(product => product.color === color));
    }
  }, [sortType, color, currentPage, query]);

  return (
    <>
      <div className="product">
        <input
          type="text"
          className="product__input"
          value={query}
          onChange={handleChange}
          placeholder="Fint your future product"
        />
        <ul className="product__list grid">
          {renderingproducts?.map((product) => (
            <li key={product.id} className="product__item">
              <ProductItem product={product} />
            </li>
          )).slice(curPage, 16 * currentPage)}
        </ul>
        <Pagination
          total={renderingproducts.length}
          perPage={16}
          currentPage={currentPage}
          onCurPage={handleCurPage}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
        />
      </div>
    </>

  );
}

export default ProductsContainer;