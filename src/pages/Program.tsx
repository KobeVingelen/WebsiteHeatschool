import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ArtistCard from '../components/LineUp/ArtistCard';
import GrainBackground from '../components/GrainBackground';


const artists = [
  {
    name: 'ROBBE-GE',
    time: '23:00 - 00:00',
    image: '/images/Dj_pictures/ROBBE-GE.png',
    description:
      'Met zijn groovy tracks kreeg hij eerder al clubs zoals KASKO aan het koken. Op 9 mei brengt hij diezelfde energie naar onze decks!',
  },
  {
    name: 'BARQIEMOON',
    time: '00:00 - 01:00',
    image: '/images/Dj_pictures/BARQIEMOON.png',
    description:
      'Deze Antwerpse DJ en producer mixt trance en hard groove in dynamische sets vol energie zijn performance op Tomorrowland brengt Barqiemoon zijn funky sound naar HEAT.',
  },
  {
    name: 'BISOUX',
    time: '01:00 - 02:00',
    image: '/images/Dj_pictures/BISOUX.png',
    description:
      'Deze talentvolle DJ uit Antwerpen brengt een bouncy vibe naar HEAT. Met invloeden van trance en hard groove laat ze de temperatuur stijgen op de dansvloer.',
  },
  {
    name: 'SKELETOR YOGI',
    time: '02:00 - 03:00',
    image: '/images/Dj_pictures/SKELETOR_YOGI.png',
    description:
      'Dit energieke DJ duo, dat clubs als de Vaag en Decadance al een aantal keer heeft laten overkoken, brengt hun eigen mix van trance en hard groove naar HEAT.',
  },
  {
    name: 'Winner DJ contest',
    time: '03:00 - 04:00',
    image:
      '/images/questionmarklogo2.png',
    description: 
      '',
  },
];

const Program = () => {
  const titleRef = useScrollAnimation();

  return (
    <div className="min-h-screen relative pt-24 px-8 sm:px-6 lg:px-8 mx-auto 2xl:w-7/12 xl:w-9/12 lg:w-11/12">
      <GrainBackground />

      <div className=" mx-auto relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mt-8 mb-16 md:mb-16  fade-up">
          <h1 className="text-4xl font-Audiowide font-bold mb-2 text-white">
            LINE-UP
          </h1>
          <div className="w-24 h-1 bg-heat-pink mx-auto rounded-full" />
        </div>


        {/* Artists Section */}
        <div className="space-y-40 pb-32">
          {artists.map((artist, index) => {
            const scrollRef = useScrollAnimation();

            return (
              <div key={index} ref={scrollRef} className="fade-up">
                <ArtistCard {...artist} isEven={index % 2 === 0} />
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Program;