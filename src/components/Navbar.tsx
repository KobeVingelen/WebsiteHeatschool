import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Ticket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-hot-pink transition-colors"
          >
            <img
              src="/images/Heat_standard.png"
              alt="Logo HEAT"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-hot-pink font-bold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/program"
              className="text-white hover:text-hot-pink font-bold transition-colors"
            >
              Line-up
            </Link>
            <Link
              to="/dj-contest"
              className="text-white hover:text-hot-pink font-bold transition-colors"
            >
              DJ Contest
            </Link>
            <Link
              to="/more"
              className="text-white hover:text-hot-pink font-bold transition-colors"
            >
              FAQ
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-hot-pink rounded hover:bg-white hover:text-hot-pink transition-colors"
            >
              <Ticket className="w-4 h-4 mr-2" />
              Buy Tickets
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-hot-pink hover:bg-black focus:outline-none"
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm border-b border-white/10">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-bold text-gray-300 hover:text-hot-pink hover:bg-white/5 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/program"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-hot-pink hover:bg-white/5 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Line-up
          </Link>
          <Link
            to="/dj-contest"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-hot-pink hover:bg-white/5 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            DJ Contest
          </Link>
          <Link
            to="/more"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-hot-pink hover:bg-white/5 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium text-white bg-hot-pink rounded hover:bg-white hover:text-hot-pink transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center">
              <Ticket className="w-4 h-4 mr-2" />
              Buy Tickets
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
