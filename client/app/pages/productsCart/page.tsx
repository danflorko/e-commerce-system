'use client';

import CartCheckout from '@/app/components/CartCheckout/CartCheckout';
import { CartProductList } from '../../components/CartProductList';
import './productCartPage.scss';
import { useDrop } from 'react-dnd';
import { monitorEventLoopDelay } from 'perf_hooks';

export default function CartPage() {
  const [{}, drop] = useDrop(() => ({
    accept: 'product',
    drop: () => ({ name: 'Cart'}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }))

  return (
    <div ref={drop} className="cart-page">
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
