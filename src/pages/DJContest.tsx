import React from 'react';
import { Music, Send } from 'lucide-react';
import SoundCloudPlayer from '../components/SoundCloudPlayer';
import GrainBackground from '../components/GrainBackground';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from '../components/Button';

const contestants = [
  {
    slot: "TBA",
    genre: "...",
    image: "https://images.unsplash.com/photo-1571266028243-e4bb35f0a8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "1331168002"
  },
  {
    slot: "TBA",
    genre: "...",
    image: "https://images.unsplash.com/photo-1571266028243-e4bb35f0a8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "1331168002"
  },
  {
    slot: "TBA",
    genre: "...",
    image: "https://images.unsplash.com/photo-1571266028243-e4bb35f0a8c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sat=-100",
    trackUrl: "1331168002"
  }
];

const DJContest: React.FC = () => {
  const titleRef = useScrollAnimation();

  return (
    <div className="min-h-screen relative pt-24 px-4 sm:px-6 lg:px-8">
      <GrainBackground />
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-32 fade-up">
          <h1 className="text-7xl font-bold mb-4 text-white">
            DJ CONTEST
          </h1>
          <div className="w-24 h-1 bg-hot-pink mx-auto rounded-full" />
        </div>

        <div className="text-center mb-16">
          <Button
            href="#"
            icon={Send}
            variant="primary"
            className="text-lg  text-white bg-hot-pink rounded hover:bg-white hover:text-hot-pink transition-colors"
          >
            Sign Up Now
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contestants.map((contestant, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-hot-pink/20 transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={contestant.image}
                  alt={contestant.slot}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-hot-pink/20 border border-hot-pink/30 text-hot-pink text-sm mb-2">
                    <Music className="w-4 h-4 mr-2" />
                    {contestant.genre}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">{contestant.slot}</h3>
                <SoundCloudPlayer trackUrl={contestant.trackUrl} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 mb-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-hot-pink">Contest Information</h2>
          <div className="text-center mb-8 p-4 border border-hot-pink/30 rounded-lg bg-hot-pink/5">
            <p className="text-hot-pink font-semibold">Winner announcement at 03:00</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 20-minute set per contestant</li>
                <li>• Genre: Tech-house / Groove / Funk...</li>
                <li>• No pre-recorded sets allowed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Prizes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Coming soon...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJContest;