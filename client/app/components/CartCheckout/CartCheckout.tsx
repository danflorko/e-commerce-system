'use client'
import { removeAllItems } from '@/app/reducers/cart';
import { useAppSelector } from '@/app/shared/store';

import { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import './CartCheckout.scss';

const CartCheckout: FC = () => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state) => state.cart)

  const [_, setIsClicked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // define the cart checkout handler function
  const handleCheckout = useCallback((event: React.MouseEvent) => {
    event.preventDefault(); // prevent the default element's onClick behavior

    setIsClicked(prev => !prev);

    if (!isCompleted) { // if checkout isn't complete
      dispatch(removeAllItems()); // clear cart
      setIsCompleted(true); // sign checkout is completed
    }
  }, [isCompleted, removeAllItems, setIsCompleted]);

  // define the cart fully clear handler function
  const handleClear = useCallback(() => {
    dispatch(removeAllItems());
  }, [removeAllItems]);

  // calculate the total items number
  const counterProducts = cart.reduce(
    (acumulator, product) => +acumulator + +product.quantity,
    0,
  );

  // calculate the total items price
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
          onClick={handleCheckout}
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
