import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/program', label: 'Line-up' },
  { to: '/dj-contest', label: 'DJ Contest' },
  { to: '/more', label: 'FAQ' },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-white hover:text-hot-pink font-bold transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;