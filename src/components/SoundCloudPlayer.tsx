import React, { useEffect, useRef } from 'react';
import { useSoundCloud } from '../context/SoundCloudContext';

interface SoundCloudPlayerProps {
  trackUrl: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ trackUrl }) => {
  const { setIsPlaying } = useSoundCloud();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://w.soundcloud.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.soundcloud) {
          if (data.soundcloud.eventName === 'play') {
            setIsPlaying(true);
          } else if (data.soundcloud.eventName === 'pause' || data.soundcloud.eventName === 'finish') {
            setIsPlaying(false);
          }
        }
      } catch (error) {
        console.error('Failed to parse SoundCloud message:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setIsPlaying]);

  const getEmbedUrl = (url: string) => {
    return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${encodeURIComponent(url)}&color=%23ff69b4&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&sharing=false&buying=false&download=false`;
  };

  return (
    <div className="w-full h-[100px] bg-black/30 rounded-sm overflow-hidden">
      <iframe
        ref={iframeRef}
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