import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center hover:opacity-80 transition-opacity"
      aria-label="HEAT Home"
    >
      <img
        src="/images/Heat_standard.png"
        alt="HEAT"
        className="h-4 sm:h-5 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;