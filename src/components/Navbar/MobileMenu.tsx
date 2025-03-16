import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className=" px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <Link
          to="/"
          className="block px-3 py-2 text-base  font-medium text-bold text-gray-300 hover:text-heat-pink hover:bg-white/5 rounded-md transition-colors"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/program"
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-heat-pink hover:bg-white/5 rounded-md transition-colors"
          onClick={onClose}
        >
          Line-up
        </Link>
        <Link
          to="/dj-contest"
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-heat-pink hover:bg-white/5 rounded-md transition-colors"
          onClick={onClose}
        >
          DJ Contest
        </Link>
        <Link
          to="/more"
          className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-heat-pink hover:bg-white/5 rounded-md transition-colors"
          onClick={onClose}
        >
          FAQ
        </Link>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 text-base font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors"
          onClick={onClose}
        >
          <span className="flex items-center">
            <Ticket className="w-4 h-4 mr-2" />
            Buy Tickets
          </span>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;