import React from 'react';

interface SoundCloudPlayerProps {
  trackUrl: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ trackUrl }) => {
  // Convert regular SoundCloud URL to embed URL
  const getEmbedUrl = (url: string) => {
    return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${encodeURIComponent(url)}&color=%23ff69b4&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
  };

  return (
    <div className="w-full h-[166px] bg-black/30 rounded-lg overflow-hidden">
      <iframe
        title="SoundCloud Player"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={getEmbedUrl(trackUrl)}
      />
    </div>
  );
};

export default SoundCloudPlayer;