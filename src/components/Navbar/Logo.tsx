import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from './images/Heat_standard.png'

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center hover:opacity-80 transition-opacity"
      aria-label="HEAT Home"
    >
      <img
        src={Img1}
        alt="HEAT"
        className="h-4 sm:h-5 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;