'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { Minus } from '../../icons/Minus';
import { Plus } from '../../icons/Plus';
import { Cross } from '@/app/icons/Cross';
import { useAppSelector } from '@/app/shared/store';
import { decrementQuantity, incrementQuantity, removeItem } from '@/app/reducers/cart';
import type { IProduct } from '@/app/types';

import './CartProductItem.scss';

type Props = {
  productInfo: IProduct;
};

export const CartProductItem: React.FC<Props> = ({ productInfo }) => {
  const dispatch = useDispatch();

  const {
    image, name, price, id, quantity = 0
  } = productInfo;

  // define the increasing item quantity handler function
  const handlerIncreaseCounter = useCallback(() => dispatch(incrementQuantity(id)), [id, incrementQuantity]);

  // define the decreasing item quantity handler function
  const handlerDicreaseCounter = useCallback(() => dispatch(decrementQuantity(id)), [id, decrementQuantity]);

  // define the removing item from the cart handler function
  const handleRemove = useCallback(() => {
    dispatch(removeItem(id));
  }, [id, removeItem]);

  return (
    <div className="product-item">
      <div className="product-item__image-container">
        <Image
          src={image}
          alt={name}
          width={195}
          height={195}
          className="product-item__image"
          loading={"lazy"}
        />
      </div>

      <div className="product-item__bottom-container">
        <div className="product-item__title">{`${name} (iMT9G2FS/A)`}</div>
        <div className="product-item__info">
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
          <div>
            <div className="product-item__price">{`$${price * (quantity || 1)}`}</div>
            <button
              type="button"
              className="product-item__cross"
              onClick={handleRemove}
            >
              <Cross />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
