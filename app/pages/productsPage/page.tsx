import { FC } from 'react';
import Products from '../../components/Products/products';
import SorterList from '../../components/Sorters/SorterList/SorterList';
import { UserContextProvider } from '../../utils/context/context';
import './productPage.scss';

interface ProductsProps { }

const ProductsPage: FC<ProductsProps> = () => {
  return (
    <UserContextProvider>
      <div className="product-page">
        <div className="product-page__products-list">
          {/* @ts-ignore */}
          <Products />
        </div>
        <div className="product-page__sorters-list">
          <SorterList />
        </div>
      </div>
    </UserContextProvider>

  );
}

export default ProductsPage;