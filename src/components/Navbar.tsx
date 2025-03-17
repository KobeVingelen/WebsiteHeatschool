import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Ticket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 text-xs bg-black border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full 2xl:w-8/12 xl:w-9/12 lg:w-11/12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-heat-pink transition-colors"
          >
            <img
              src="/images/HEAT_logo_nottrans.jpg"
              alt="Logo HEAT"
              className="h-16 w-auto object-contain" 
            />
          </Link>

          <div className="text-xs hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className=" text-white font-Audiowide hover:text-heat-pink font-bold transition-colors"
            >
              Home
            </Link>
            <Link
              to="/program"
              className="text-white font-Audiowide hover:text-heat-pink font-bold transition-colors"
            >
              Line-up
            </Link>
            <Link
              to="/dj-contest"
              className="text-white font-Audiowide hover:text-heat-pink font-bold transition-colors"
            >
              DJ Contest
            </Link>
            <Link
              to="/more"
              className="text-white font-Audiowide hover:text-heat-pink font-bold transition-colors"
            >
              FAQ
            </Link>
            <a
              href="https://heatboilerroom.eventsquare.store/nl/oqs4qgra3oo1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sx font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors"
            >
              <Ticket className="w-4 h-4 mr-2" />
              Buy Tickets
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-heat-pink hover:bg-black focus:outline-none"
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
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <div className="min-h-screen flex flex-col px-4">
            {/* Logo at top */}
            <div className="flex justify-center py-8">
              <img
                src="/images/HEAT_logo_nottrans.jpg"
                alt="Logo HEAT"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-300 hover:text-heat-pink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col mx-auto  space-y-8 mt-8">
              <div className="w-full max-w-xs text-center mx-auto">
                <Link
                  to="/"
                  className="text-2xl font-bold text-white font-Audiowide hover:text-heat-pink transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/program"
                  className="text-2xl font-bold text-white font-Audiowide hover:text-heat-pink transition-colors block mt-8"
                  onClick={() => setIsOpen(false)}
                >
                  Line-up
                </Link>
                <Link
                  to="/dj-contest"
                  className="text-2xl font-bold text-white font-Audiowide hover:text-heat-pink transition-colors block mt-8"
                  onClick={() => setIsOpen(false)}
                >
                  DJ Contest
                </Link>
                <Link
                  to="/more"
                  className="text-2xl font-bold text-white font-Audiowide hover:text-heat-pinktransition-colors block mt-8"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                
                {/* Ticket Button */}
                <a
                  href="https://heatboilerroom.eventsquare.store/nl/oqs4qgra3oo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center px-3 py-1 text-lg font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Ticket className="w-5 h-5 mr-2" />
                  Buy Tickets
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;