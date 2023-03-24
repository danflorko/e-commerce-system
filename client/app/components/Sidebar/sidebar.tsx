'use client';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { navigationLinks } from '@/app/utils/constants';
import { useAppSelector } from '@/app/shared/store';
import { useDrop } from 'react-dnd';
import type { FC } from 'react';

import './sidebar.scss'
import classNames from 'classnames';
import { CartProductList } from '../CartProductList';
interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const [{ item, isOver }, drop] = useDrop(() => ({ // implement dropping functionality
    accept: 'product', // type of accepted to dropping dragging element
    drop: () => ({ name: 'Cart' }), // calling when valid element is dropped 
    collect: (monitor) => ({
      isOver: monitor.isOver(), // is dragging element currently being dragged over the component
      canDrop: monitor.canDrop(), // is dragging element can currently accept a drop
      item: monitor.getItemType() // the type property of dragging element
    })
  }))

  // calculates the total number of products in the cart
  const counterProducts = cart.reduce(
    (acumulator, product) => +acumulator + +product.quantity,
    0,
  );

  return (
    <nav ref={drop} className={classNames("nav", { 'drop-container': !!item })}>
      <div className='cart-page__product-list'>
        <CartProductList />
        <div className={classNames(['product-item', 'new'], { 'overed': isOver })}>
          <span>DROP PRODUCT</span>
        </div>
      </div>
      <ul>
        <li>
          <Link href="/" className="logo">
            <span className="nav-item">Shop</span>
          </Link>
        </li>
        {navigationLinks.map((route, idx) => (
          <li key={`route-${idx}`}>
            <Link href={route.path}>
              {route.name === 'Cart' && (
                <div className='cart-count'>
                  {counterProducts}
                </div>
              )}
              <FontAwesomeIcon
                icon={route.icon}
                style={{
                  width: 60,
                  height: 45,
                  top: 3,
                  fontSize: 15,
                  textAlign: 'center',
                  color: "black",
                  position: 'relative',
                  marginRight: 25
                }}
              />
              <span className="nav-item">{route.name}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link href="#" className="logout">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{
                width: 60,
                height: 45,
                top: 3,
                fontSize: 20,
                textAlign: 'center',
                color: "black",
                position: 'relative',
                marginRight: 25
              }}
            />
            <span className="nav-item">Log out</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Sidebar;
