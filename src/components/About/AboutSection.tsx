import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import YouTubePlayer from './YouTubePlayer';

const AboutSection = () => {
  const aboutRef = useScrollAnimation();

  return (
    <div ref={aboutRef} className="max-w-7xl mx-auto px-4 sm:px-6 fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative items-center">
        {/* Gradient Border for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-hot-pink to-transparent transform -translate-x-1/2" />
        
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-pink">
            About HEAT
          </h2>
          <div className="text-base sm:text-lg text-gray-300 space-y-4">
            <p className="leading-relaxed">
              HEAT dompelt je onder in een 360° dj-setting vol hardgroove en
              trance. Zes opkomende talenten trappen de avond af met een
              dj-contest. Wanneer de zaal overkookt, neemt een verhitte
              line-up het over: DC Noises, Barqiemoon en Skeletor Yogi.
            </p>
            <p className="leading-relaxed">
              In een intieme sfeer, gevoed door jullie zwetende lijven, draait
              alles om de sterke connectie tussen jou en de dj's, de vibe en
              de party people. 3am: de winnaar van de contest zet de oven op
              360. De Boiler Room stoomt voor jou op 22 maart in de 'Club'
              van Trix, Antwerpen. Scoor je tickets nu!
            </p>
          </div>
        </div>

        {/* YouTube Player */}
        <div className="relative aspect-video w-full lg:pl-12 mt-8 lg:mt-0">
          <YouTubePlayer videoId="YOUR_VIDEO_ID" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;