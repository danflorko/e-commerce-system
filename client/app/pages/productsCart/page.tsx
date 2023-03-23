'use client';

import CartCheckout from '@/app/components/CartCheckout/CartCheckout';
import { CartProductList } from '../../components/CartProductList';

import './productCartPage.scss';

export default function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-page__title">Cart</div>

      <div className="cart-page__container">
        <div className="cart-page__product-list">
          <CartProductList />
        </div>

        <div className="cart-page__checkout">
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};
