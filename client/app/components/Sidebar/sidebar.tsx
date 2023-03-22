'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { navigationLinks } from '@/app/utils/constants';

import './sidebar.scss'
import classNames from 'classnames';
import { useAppSelector } from '@/app/shared/store';
interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const counterProducts = cart.reduce(
    (acumulator, product) => +acumulator + +product.quantity,
    0,
  );

  return (
    <nav className="nav">
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
