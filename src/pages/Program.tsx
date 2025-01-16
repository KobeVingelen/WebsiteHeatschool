import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ArtistCard from '../components/LineUp/ArtistCard';
import GrainBackground from '../components/GrainBackground';
import { Clock } from 'lucide-react';

const artists = [
  {
    name: 'ROBBE-GE',
    time: '23:00 - 00:00',
    image: '/images/Dj_pictures/ROBBE-GE.png',
    description:
      'ROBBE_GE, een opkomend talent in de Belgische techno scene, staat bekend om zijn donkere, industriële beats en hypnotiserende ritmes. Zijn sets zijn een perfecte mix van raw techno en moderne elektronische elementen.',
  },
  {
    name: 'BARQIEMOON',
    time: '00:00 - 01:00',
    image: '/images/Dj_pictures/BARQIEMOON.png',
    description:
      'Met een unieke blend van acid techno en industrial, creëert Barqiemoon een meeslepende ervaring die je niet snel zult vergeten. Zijn energieke sets zorgen voor een onvergetelijke nacht.',
  },
  {
    name: 'BISOUX',
    time: '01:00 - 02:00',
    image: '/images/Dj_pictures/BISOUX.png',
    description:
      'Bisoux pusht de grenzen van conventionele techno. Met invloeden uit verschillende elektronische genres, creëert hij een unieke sound die de dansvloer in vuur en vlam zet.',
  },
  {
    name: 'SKELETOR YOGI',
    time: '02:00 - 03:00',
    image: '/images/Dj_pictures/SKELETOR_YOGI.png',
    description:
      'Skeletor Yogi pusht de grenzen van conventionele techno. Met invloeden uit verschillende elektronische genres, creëert hij een unieke sound die de dansvloer in vuur en vlam zet.',
  },
  {
    name: 'Winner DJ contest',
    time: '03:00 - 04:00',
    image:
      'https://images.unsplash.com/photo-1598387746216-506f6bd47adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100',
    description:
      'Een mysterieuze special guest sluit de nacht af. Verwacht het onverwachte van deze gevestigde naam in de techno scene.',
  },
];

const Program = () => {
  const titleRef = useScrollAnimation();

  return (
    <div className="min-h-screen relative pt-24 px-16 sm:px-6 lg:px-8">
      <GrainBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-32 fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Audiowide font-bold mb-4 text-white">
            LINE-UP
          </h1>
          <div className="w-24 h-1 bg-hot-pink mx-auto rounded-full" />
        </div>
        
        <div >
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 sm:p-12 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-hot-pink mb-6">
                To Be Announced
              </h2>
              <div className="flex items-center justify-center text-white/80 mb-8">
                <Clock className="w-6 h-6 mr-2 text-hot-pink" />
                <span className="text-lg">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Artists Section */}
        <div className="space-y-40 pb-32 hidden">
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