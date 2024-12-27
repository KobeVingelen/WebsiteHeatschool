import { useEffect, useRef, useState } from 'react';

export const useImageColorEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isColored, setIsColored] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When 60% of the element is visible, trigger the color effect
          if (entry.intersectionRatio > 0.6) {
            setIsColored(true);
          } else {
            setIsColored(false);
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-20% 0px -20% 0px', // Triggers when element is in the middle 60% of viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isColored };
};