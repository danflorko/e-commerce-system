import { Suspense } from 'react';

import Loading from '../../loading';
import Products from '../../components/Products/products';
import SorterList from '../../components/Sorters/SorterList/SorterList';
import { UserContextProvider } from '../../utils/context/context';

import './productPage.scss';

export async function getStaticPaths() {
  return {
    paths: ['/pages/productsPage'],
    fallback: true,
  }
}

export default async function ProductsPage() {
  return (
    <UserContextProvider>
      <div className="product-page">
        <div className="product-page__products-list">
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        </div>
        <div className="product-page__sorters-list">
          <SorterList />
        </div>
      </div>
    </UserContextProvider>
  );
}
