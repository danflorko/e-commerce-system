import { faHome, faStore, faUser, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

export const navigationLinks = [
  {
    path: '/',
    icon: faHome,
    name: 'Home',
  },
  {
    path: '/pages/productsCart',
    icon: faCartShopping,
    name: 'Cart',
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
    icon: faHeart,
    name: 'Favorites',
  },
];
