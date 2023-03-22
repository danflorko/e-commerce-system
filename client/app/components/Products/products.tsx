import ProductsContainer from '../ProductsContainer/ProductsContainer';
import type { FC } from 'react';
import type { IProduct } from '@/app/types';

interface ProductsPageProps {
  products: IProduct[];
}

const ProductsPage: FC<ProductsPageProps> = ({ products }) => (
  <ProductsContainer products={products} />
);

export default ProductsPage;
