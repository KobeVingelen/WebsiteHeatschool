import React from 'react';
import { Clock } from 'lucide-react';
import { Artist } from '../../types';
import { useImageColorEffect } from '../../hooks/useImageColorEffect';

interface ArtistCardProps extends Artist {
  isEven: boolean;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, image, description, time, isEven }) => {
  const { ref: colorRef, isColored } = useImageColorEffect();

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2" ref={colorRef}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl transform transition-transform duration-700 hover:scale-[1.02] group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <img 
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isColored ? '' : 'grayscale'
            } group-hover:grayscale-0`}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 space-y-6 px-4 lg:px-8">
        <div className={`w-16 h-[2px] bg-hot-pink ${isEven ? '' : 'ml-auto'}`} />
        <div className="space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold text-white tracking-wider">{name}</h2>
          <div className="flex items-center text-hot-pink">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-medium">{time}</span>
          </div>
        </div>
        <p className="text-white text-lg leading-relaxed">
          {description}
        </p>
        <div className={`w-16 h-[2px] bg-hot-pink ${isEven ? 'ml-auto' : ''}`} />
      </div>
    </div>
  );
};

export default ArtistCard;