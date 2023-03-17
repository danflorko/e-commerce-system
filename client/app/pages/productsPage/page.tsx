import { Suspense } from 'react';

import Loading from '../../loading';
import Products from '../../components/Products/products';
import SorterList from '../../components/Sorters/SorterList/SorterList';
import { UserContextProvider } from '../../utils/context/context';
import { productsService } from '@/app/api/productsService';
import type { product } from '@/app/types';

import './productPage.scss';

export default async function ProductsPage() {
  const products: product[] = await productsService.getproducts();

  return (
    <UserContextProvider>
      <div className="product-page">
        <div className="product-page__products-list">
          <Suspense fallback={<Loading />}>
            <Products products={products} />
          </Suspense>
        </div>
        <div className="product-page__sorters-list">
          <SorterList products={products} />
        </div>
      </div>
    </UserContextProvider>

  );
}