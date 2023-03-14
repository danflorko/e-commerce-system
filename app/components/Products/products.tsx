import { product } from '@/app/types';

import './products.scss';
import '../../styles/utils/grid.scss';
import { productsService } from './productsService';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

export default async function Products() {
  const products: product[] = await productsService.getproducts();

  return (
    <ProductsContainer products={products}/>
  );
};
