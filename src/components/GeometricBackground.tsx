import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(30deg, #ff69b4 12%, transparent 12.5%, transparent 87%, #ff69b4 87.5%, #ff69b4),
              linear-gradient(150deg, #ff69b4 12%, transparent 12.5%, transparent 87%, #ff69b4 87.5%, #ff69b4),
              linear-gradient(30deg, #ff69b4 12%, transparent 12.5%, transparent 87%, #ff69b4 87.5%, #ff69b4),
              linear-gradient(150deg, #ff69b4 12%, transparent 12.5%, transparent 87%, #ff69b4 87.5%, #ff69b4),
              linear-gradient(60deg, #ff69b477 25%, transparent 25.5%, transparent 75%, #ff69b477 75%, #ff69b477)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>
    </div>
  );
};

export default GeometricBackground;