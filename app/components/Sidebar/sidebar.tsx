import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import {
  faHome,
  faStore,
  faUser,
  faCartShopping,
  faHeart,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss'
import Link from 'next/link';

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
  const routes = [
    {
      path: '/',
      icon: faHome,
      name: 'Home',
    },
    {
      path: '/pages/productsPage',
      icon: faStore,
      name: 'Products'
    },
    {
      path: '/',
      icon: faUser,
      name: 'Profile',
    },
    {
      path: '/',
      icon: faCartShopping,
      name: 'Cart',
    },
    {
      path: '/',
      icon: faHeart,
      name: 'Favorites',
    },
  ];

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/" className="logo">
            {/* <img src="" alt="" /> */}
            <span className="nav-item">Shop</span>
          </Link>
        </li>
        {routes.map(route => (
          <li>
            <Link href={route.path}>
              <FontAwesomeIcon
                icon={route.icon}
                style={{
                  width: 40,
                  height: 30,
                  top: 3,
                  fontSize: 15,
                  textAlign: 'center',
                  color: "black",
                  position: 'relative',
                  marginRight: 20
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
                width: 40,
                height: 30,
                top: 3,
                fontSize: 20,
                textAlign: 'center',
                color: "black",
                position: 'relative',
                marginRight: 20
              }}
            />
            <span className="nav-item">Log out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Sidebar;