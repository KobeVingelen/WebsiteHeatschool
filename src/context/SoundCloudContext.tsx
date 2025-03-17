import React, { createContext, useContext, useState } from 'react';

interface SoundCloudContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const SoundCloudContext = createContext<SoundCloudContextType | undefined>(undefined);

export const SoundCloudProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SoundCloudContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </SoundCloudContext.Provider>
  );
};

export const useSoundCloud = () => {
  const context = useContext(SoundCloudContext);
  if (context === undefined) {
    throw new Error('useSoundCloud must be used within a SoundCloudProvider');
  }
  return context;
};