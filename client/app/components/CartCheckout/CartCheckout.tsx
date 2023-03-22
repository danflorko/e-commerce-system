'use client'
import { removeAllItems } from '@/app/reducers/cart';
import { useAppSelector } from '@/app/shared/store';

import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import './CartCheckout.scss';

const CartCheckout: FC = () => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state) => state.cart)
  const [isClicked, setIsClicked] = useState(false);

  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsClicked(!isClicked);

    if (!isCompleted) {
      dispatch(removeAllItems());
      setIsCompleted(true);
    }
  };

  const handleClear = () => {
    dispatch(removeAllItems());
  };

  const counterProducts = cart.reduce(
    (acumulator, product) => +acumulator + +product.quantity,
    0,
  );
  const totalPrice = cart.reduce(
    (acumulator, product) => +acumulator + +product.price * +product.quantity,
    0,
  );
  return (
    <>
      <div className="cart-page__line" />
      <div className='cart-page__controls'>
        <button
          type="button"
          className="cart-page__clear-button"
          onClick={handleClick}
          disabled={!counterProducts}
        >
          Clear All
        </button>
        <button
          type="button"
          className="cart-page__checkout-button"
          onClick={handleClear}
          disabled={!counterProducts}
        >
          Checkout
        </button>
        <div className="cart-page__totals">
          <div className="cart-page__counter">
            {`Total for ${counterProducts} products`}
          </div>
          <div className="cart-page__total-price">{`$${totalPrice}`}</div>
        </div>
      </div>
    </>
  );
}

export default CartCheckout;
