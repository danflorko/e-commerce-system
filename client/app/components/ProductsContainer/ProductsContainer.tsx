'use client';
import React, { useTransition } from 'react';
import { useState, useContext, useEffect, useCallback } from 'react';
import type { FC } from 'react';

import ProductItem from '../ProductItem/ProductItem';
import { ProductsContext } from '@/app/utils/context/context';
import { Pagination } from '../Pagination';
import { SortType } from '@/app/types/enums';
import type { IProduct } from '@/app/types';

import './products.scss';
import '../../styles/utils/grid.scss';

interface ProductsContainerProps {
  products: IProduct[]
  isLoading: boolean
}

const ProductsContainer: FC<ProductsContainerProps> = ({ products, isLoading }) => {
  const { sortType, color } = useContext(ProductsContext);
  const [renderingproducts, setRenderingproducts] = useState<IProduct[]>([]);
  const [isPending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  const includesQuery = useCallback((text: string) => text.toLowerCase().includes(query?.toLowerCase()), [query]);

  const handleChange = useCallback((event: { target: { value: any; }; }) => {
    const { value } = event.target;

    startTransition(() => {
      setQuery(value || "");
    })
  }, []);

  const handleCurPage = useCallback((numberOfPage: number) => {
    setCurrentPage(numberOfPage);
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage(page => page === 1 ? page : page - 1)
  }, []);

  const handleNextPage = useCallback((lastPage: number) => {
    setCurrentPage(page => page === lastPage ? page : page + 1)
  }, []);

  useEffect(() => {
    startTransition(() => {
      setRenderingproducts(
        products.filter(product => color === 'All' ? includesQuery(product.name) : includesQuery(product.name) && product.color == color)
      )
    })
  }, [products, query, color])

  useEffect(() => {
    startTransition(() => {
      switch (sortType) {
        case SortType.Cheapest:
          setRenderingproducts((prev) => [...prev.sort((a, b) => Number(a.price) - Number(b.price))]);
          break;
        case SortType.Expensive:
          setRenderingproducts((prev) => [...prev.sort((a, b) => Number(b.price) - Number(a.price))]);
          break;
      }
    })
  }, [sortType, currentPage]);

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
          )).slice(currentPage === 1 ? 0 : 16 * (currentPage - 1), 16 * currentPage)}
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
};

export default ProductsContainer;
