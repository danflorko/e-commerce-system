import Image from 'next/image';
import type { FC } from 'react'

import type { product } from '@/app/types';

import './ProductItem.scss';

interface ProductItemProps {
  product: product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const {
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = product;

  return (
    <div className="card">
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
    </div>
  );;
}

export default ProductItem;