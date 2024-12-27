import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import TicketButton from './TicketButton';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-49  backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1">
            <NavLinks />
            <TicketButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-hot-pink hover:bg-black focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;