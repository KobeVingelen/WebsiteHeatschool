import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import YouTubePlayer from './YouTubePlayer';

const AboutSection = () => {
  const aboutRef = useScrollAnimation();

  return (
    <div ref={aboutRef} className="mx-auto px-4 sm:px-6 fade-up 2xl:w-8/12 xl:w-9/12 lg:w-11/12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
        {/* Gradient Border for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-hot-pink to-transparent transform -translate-x-1/2" />
        
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-xl font-bold font-Audiowide text-white">
            About HEAT
          </h2>
          <div className="text-base sm:text-md text-gray-300 space-y-4">
          HEAT is a dynamic music event in Antwerp, inspired by the Boiler Room concept. With a 360° stage that places the crowd at the center, the night kicks off with a thrilling DJ contest showcasing emerging talent, followed by a stellar lineup of DJs delivering high-energy hard groove and trance. In an intimate atmosphere fueled by the connection between the DJs, the vibe, and the party people, HEAT promises a night to remember. Join us on May 9, 2025, at Kavka Oudaan, Antwerp. Get your tickets now!
          </div>
        </div>

        {/* YouTube Player */}
        <div className="relative aspect-video w-full lg:pl-12 mt-8 lg:mt-0">
          <YouTubePlayer videoId="24py2CSvqtM" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;