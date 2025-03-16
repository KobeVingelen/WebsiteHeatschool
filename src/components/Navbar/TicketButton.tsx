import React from 'react';
import { Ticket } from 'lucide-react';

const TicketButton = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors"
    >
      <Ticket className="w-4 h-4 mr-2" />
      Buy Tickets
    </a>
  );
};

export default TicketButton;