import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SoundCloudPlayer from '../SoundCloudPlayer';
import { useSoundCloud } from '../../context/SoundCloudContext';

interface Contestant {
  slot: string;
  genre: string;
  image: string;
  trackUrl: string;
}

interface DjcarouselProps {
  contestants: Contestant[];
}

const Djcarousel: React.FC<DjcarouselProps> = ({ contestants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleItems, setVisibleItems] = useState(3);
  const { isPlaying } = useSoundCloud();

  // Create a circular array for infinite loop
  const items = [...contestants, ...contestants.slice(0, visibleItems)];

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) { // Mobile
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setVisibleItems(2);
      } else { // Desktop
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying && !isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex > contestants.length - visibleItems) {
            return 0;
          }
          return nextIndex;
        });
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, contestants.length, visibleItems, isPlaying]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevious = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return contestants.length - visibleItems;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > contestants.length - visibleItems) {
        return 0;
      }
      return newIndex;
    });
  };

  const translateX = `translateX(-${currentIndex * (100 / visibleItems)}%)`;
  const buttonClasses = "absolute top-1/2 -translate-y-1/2 z-10 bg-heat-pink/80 hover:bg-heat-pink text-white p-2 transition-colors";

  return (
    <div className="relative w-full sm:p-8">
      <button
        onClick={handlePrevious}
        className={`${buttonClasses} left-0 rounded-none`}
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className={`${buttonClasses} right-0 rounded-none`}
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="overflow-hidden">
        <div 
          className="flex transition-all duration-1000 ease-in-out transform"
          style={{ transform: translateX }}
        >
          {items.map((contestant, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + visibleItems;
            return (
              <div
                key={`${contestant.slot}-${index}`}
                className={`min-w-full sm:min-w-[50%] lg:min-w-[33.333%] transform-gpu transition-all duration-500 sm:px-3`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `scale(${isVisible ? 1 : 0.95})`,
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={contestant.image}
                      alt={contestant.slot}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-3 text-white">{contestant.slot}</h3>
                    <SoundCloudPlayer trackUrl={contestant.trackUrl} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Djcarousel;