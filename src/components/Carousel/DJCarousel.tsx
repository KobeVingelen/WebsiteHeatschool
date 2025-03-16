import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SoundCloudPlayer from '../SoundCloudPlayer';

interface Contestant {
  slot: string;
  genre: string;
  image: string;
  trackUrl: string;
}

interface DjcarouselProps {
  contestants: Contestant[];
}

const DJCarousel: React.FC<DjcarouselProps> = ({ contestants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleItems, setVisibleItems] = useState(3);

  // Create a circular array for infinite loop
  const items = [...contestants, ...contestants, ...contestants];

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
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // Reset when we're about to show the first contestant again
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
  }, [isAutoPlaying, contestants.length, visibleItems]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
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

  // Calculate the transform value based on the current index and visible items
  const translateX = `translateX(-${currentIndex * (100 / visibleItems)}%)`;

  const buttonClasses = "absolute top-1/2 -translate-y-1/2 z-10 bg-hot-pink/80 hover:bg-hot-pink text-white p-2 transition-colors";

  return (
    <div className="relative w-full">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className={`${buttonClasses} left-0 rounded-r-lg`}
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className={`${buttonClasses} right-0 rounded-l-lg`}
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="overflow-hidden">
        <div 
          className="flex gap-6 mr-10 transition-all duration-1000 ease-in-out transform"
          style={{ transform: translateX }}
        >
          {items.map((contestant, index) => (
            <div
              key={`${contestant.slot}-${index}`}
              className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)] bg-white/5 backdrop-blur-sm transform-gpu"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={contestant.image}
                  alt={contestant.slot}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">{contestant.slot}</h3>
                <SoundCloudPlayer trackUrl={contestant.trackUrl} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DJCarousel;