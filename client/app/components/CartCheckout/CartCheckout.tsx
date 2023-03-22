'use client'

import { removeAllItems } from '@/app/reducers/cart';
import { useAppSelector } from '@/app/shared/store';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import './CartCheckout.scss';
// import { useNavigate } from 'react-router-dom'

interface CartCheckoutProps {

}

const CartCheckout: FC<CartCheckoutProps> = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  // const navigete = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsClicked(!isClicked);

    if (!isCompleted) {
      dispatch(removeAllItems());
      setIsCompleted(true);

      // setTimeout(() => {
      //   navigete('/');
      // }, 2000);
    }
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
      <div className="cart-page__total-price">{`$${totalPrice}`}</div>

      <div className="cart-page__counter">
        {`Total for ${counterProducts} products`}
      </div>

      <div className="cart-page__line" />

      <button
        type="button"
        className="cart-page__checkout-button"
        onClick={handleClick}
        disabled={!counterProducts}
      >
        Checkout
      </button>
    </>
  );
}

export default CartCheckout;
