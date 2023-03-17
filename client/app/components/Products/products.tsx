import ProductsContainer from '../ProductsContainer/ProductsContainer';
import type { FC } from 'react';
import type { product } from '@/app/types';

import './products.scss';
import '../../styles/utils/grid.scss';

interface ProductsPageProps {
  products: product[];
}

const ProductsPage: FC<ProductsPageProps> = ({ products }) => (
  <ProductsContainer products={products} />
);

export default ProductsPage
