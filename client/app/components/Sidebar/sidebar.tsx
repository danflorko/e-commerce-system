import type { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { navigationLinks } from '@/app/utils/constants';

import './sidebar.scss'
interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => (
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

export default Sidebar;