'use client';

import React from 'react';
import { Minus } from '../../icons/Minus';
import { Plus } from '../../icons/Plus';
import { Cross } from '@/app/icons/Cross';
import type { IProduct } from '@/app/types';
import './CartProductItem.scss';
import { useAppSelector } from '@/app/shared/store';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '@/app/reducers/cart';

type Props = {
  productInfo: IProduct;
};

export const CartProductItem: React.FC<Props> = ({ productInfo }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const {
    image, name, price, id, quantity = 0
  } = productInfo;

  const counter = cart.filter((product) => product.id === id).length;

  const handlerIncreaseCounter = () => dispatch(incrementQuantity(id));
  

  const handlerDicreaseCounter = () => dispatch(decrementQuantity(id));

  const handleClose = () => {
    dispatch(removeItem(id));
  };

  const totalPrice = price * (quantity || 1);

  return (
    <div className="product-item">
      <div className="product-item__info">
        <button
          type="button"
          className="product-item__cross btn-reset"
          onClick={handleClose}
        >
          <Cross />
        </button>

        <div className="product-item__image-container">
          <img
            src={image}
            alt="ProductItemImage"
            className="product-item__image"
          />
        </div>
        <div className="product-item__title">{`${name} (iMT9G2FS/A)`}</div>
      </div>

      <div className="product-item__bottom-container">
        <div className="product-item__counter">
          <button
            type="button"
            className="product-item__minus btn-reset"
            onClick={handlerDicreaseCounter}
          >
            <Minus />
          </button>
          <div className="product-item__amount">{quantity}</div>
          <button
            type="button"
            className="product-item__plus btn-reset"
            onClick={handlerIncreaseCounter}
          >
            <Plus />
          </button>
        </div>
        <div className="product-item__price">{`$${totalPrice}`}</div>
      </div>
    </div>
  );
};
