'use client';

import { useAppSelector } from '@/app/shared/store';
import { CartProductItem } from '../CartProductItem';
import './CartProductList.scss';

export const CartProductList: React.FC = () => {
  const { cart } = useAppSelector((state) => state.cart)
  return (
    <>
      {cart.length ? (
        cart.map((product) => (
          <CartProductItem productInfo={product} key={product.id} />
        ))
      ) : (
        <div className="title">Cart is empty</div>
      )}
    </>
  );
};
