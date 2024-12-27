import React, { useEffect, useState } from 'react';

interface LoadingOverlayProps {
  onLoadingComplete: () => void;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Minimum display time of 2 seconds
    const minDisplayTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Notify parent component after fade out
      setTimeout(() => {
        onLoadingComplete();
        setShouldRender(false);
      }, 600); // Wait for fade out animation
    }, 1200);

    return () => {
      clearTimeout(minDisplayTimer);
    };
  }, [onLoadingComplete]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="animate-pulse">
        <img
          src="/src/public/images/Logo_transparant.png"
          alt="HEAT"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingOverlay;