import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import TicketButton from './Navbar/TicketButton';

const EventDetails = () => {
  const eventDetailsRef = useScrollAnimation();

  return (
    <div
      ref={eventDetailsRef}
      className="mt-12 sm:mt-12 grid grid-cols-1  lg:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto px-4 sm:w-4/6 "
    >
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-4  border border-white/10">
        <h3 className="text-lg sm:text-md  font-Audiowide mb-2 text-heat-pink">Location</h3>
        <p className="text-sm sm:text-base text-white">
          Kavka Oudaan
          <br />
          Oudaan 14, 2000 Antwerp
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10">
        <h3 className="text-lg sm:text-md font-Audiowide mb-2 text-heat-pink">
          Date & Time
        </h3>
        <p className="text-sm sm:text-base text-white">
          Friday, May 9th
          <br />
          21:00 - 04:00
        </p>
      </div>
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/10">
        <h3 className="text-lg sm:text-md font-Audiowide mb-2 text-heat-pink">Tickets</h3>
        <TicketButton />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col justify-center font-Audiowide items-center text-center animate-in space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold  tracking-tighter">
            <span className="text-heat-pink">ANTWERP</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tighter">
            <span className="text-heat-pink">BOILER ROOM</span>
          </h2>
        </div>
        <EventDetails />
      </div>
    </section>
  );
};

export default Hero;