'use client';
import { Suspense } from 'react';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Loading from '@/app/loading';
import { useAppSelector } from '@/app/shared/store';
import type { FC } from 'react';

const ProductsPage: FC = ({ }) => {
  const { products, productsLoading } = useAppSelector(state => state.productsSaga)
  return (
    <Suspense fallback={<Loading />}>
      <ProductsContainer products={products} isLoading={productsLoading} />
    </Suspense>
  )
};

export default ProductsPage;
