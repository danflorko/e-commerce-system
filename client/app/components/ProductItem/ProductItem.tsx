'use client';

import Image from 'next/image';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { incrementQuantity, addToCart } from '@/app/reducers/cart';
import { useAppSelector } from '@/app/shared/store';
import type { FC } from 'react';

import AddToCartButton from '../AddToCartButton/AddToCartButton';
import type { IProduct } from '@/app/types';

import './ProductItem.scss';

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const {
    id,
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = product;

  const dispatch = useDispatch();
  const { cart } = useAppSelector((state) => state.cart)

  const [{ }, drag] = useDrag(() => ({ // implement dragging functionality with dragged element ref
    type: 'product', // type of dragged element
    item: { id }, // key of dragged element
    end: (item, monitor) => { // dragging finish handler
      const dropResult = monitor.getDropResult(); // get result of dropping

      if (item && dropResult) { // if drop succeed
        if (cart.find(product => product.id === id)) { // if item in cart increment item in cart quantity
          dispatch(incrementQuantity(id))
        } else { // otherwise add item to cart
          dispatch(addToCart({
            id, name, image, price
          }))
        }
      }
    },
    collect: (monitor) => ({ // dragging state handler
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div
      ref={drag}
      className="card"
    >
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="card__image"
        loading={"lazy"}
      />
      <h2 className="card__title">{`${name} (iMT9G2FS/A)`}</h2>

      <p className="card__price">
        <span className="card__sell-price">{`$${price}`}</span>
        <span className="card__full-price">{`$${fullPrice}`}</span>
      </p>

      <hr className="card__line" />

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">Screen</span>
          <span className="card__feature-name--value">{screen}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">Capacity</span>
          <span className="card__feature-name--value">{capacity}</span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">RAM</span>
          <span className="card__feature-name--value">{ram}</span>
        </p>
      </div>

      <div className="card__buttons">
        <AddToCartButton
          id={id}
          image={image}
          name={name}
          price={price}
        />
      </div>
    </div>
  );
}

export default ProductItem;
