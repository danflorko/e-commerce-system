'use client';

import { addToCart, removeItem } from '@/app/reducers/cart';
import { useAppSelector } from '@/app/shared/store';
import { useDispatch } from 'react-redux';

import type { FC } from 'react';

interface AddToCartButtonProps {
  id: string,
  image: string,
  name: string,
  price: number,
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  id,
  name,
  image,
  price,
}) => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state) => state.cart)

  const handleShop = () => {
    if (cart.find(product => product.id === id)) {
      dispatch(removeItem(id))
    } else {
      dispatch(addToCart({
        id, name, image, price
      }))
    }
  };

  const isSelected = cart.some((product) => product.id === id);

  return (
    <button
      type="button"
      className={isSelected ? 'card__button-added' : 'card__button-add'}
      onClick={handleShop}
    >
      {isSelected ? 'Added' : 'Add to cart'}
    </button>
  );
}

export default AddToCartButton;
