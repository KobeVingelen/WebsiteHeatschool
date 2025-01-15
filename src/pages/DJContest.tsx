import React from 'react';
import { Music, Send, Headphones } from 'lucide-react';
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
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Audiowide mb-4 text-white">
            DJ CONTEST
          </h1>
          <div className="w-24 h-1 bg-hot-pink mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="">
            <div className="p-4 sm:p-8 text-center">
              
              <h2 className="text-2xl sm:text-4xl md:text-2xl font-bold text-white mb-4 sm:mb-6 font-Audiowide">Show Us Your Skills</h2>
              <div className='text-left'>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-6 sm:mb-4 px-2 sm:px-4"/>
              <span className='bold'>Hey DJ!</span>
              <p>Do you dream of playing the same 360° stage as Barqiemoon, Skeletor Yogi, and Bisoux?</p>
              <p>During the HEAT DJ contest, only 6 talented DJs will get the chance to make the Boiler Room at Kavka Oudaan boil over. Grab your chance, send in your best set, and you might be the one to close the night as the winner and take home a prize from Pioneer!</p>
              </div>

              <div className='mt-4'>
              <span>Scan the QR code Or <a className='text-hot-pink hover:text-white text-bold' href="#">Click here!</a></span>
              <div className="flex flex-col items-center justify-center mt-4 mb-8">
                <div className="w-30 h-30 bg-white p-4 rounded-lg">
                  <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-1">
                    {/* QR Code corners */}
                    <div className="col-span-2 row-span-2 bg-black p-2">
                      <div className="w-full h-full border-4 border-white bg-black" />
                    </div>
                    <div className="col-start-5 col-span-2 row-span-2 bg-black p-2">
                      <div className="w-full h-full border-4 border-white bg-black" />
                    </div>
                    <div className="col-span-2 row-start-5 row-span-2 bg-black p-2">
                      <div className="w-full h-full border-4 border-white bg-black" />
                    </div>
                    {/* Random QR code pattern */}
                    <div className="col-start-3 row-start-2 bg-black" />
                    <div className="col-start-4 row-start-3 bg-black" />
                    <div className="col-start-2 row-start-4 bg-black" />
                    <div className="col-start-5 row-start-4 bg-black" />
                    <div className="col-start-3 row-start-5 bg-black" />
                    <div className="col-start-4 row-start-5 bg-black" />
                  </div>
                </div>
              </div>
              </div>

              <div className="grid text-pretty grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Round 1 */}
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">Round 1</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2 ">•</span>
                      <span>Submit your best 20-minute set!</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2 ">•</span>
                      <span>Genre: Hardgroove, Trance</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span className=''>The Top 6 DJs selected by our panel will go to round 2!</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>Deadline: TBA</span>
                    </li>
                  </ul>
                </div>

                {/* Round 2 */}
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">Round 2</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>Top 6 selected DJs will play a live set at the event</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>20-minute live set</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>Winner: Judged on crowd vote!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">1st Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>DJ RMX-1000 valued at €749</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>To be announced</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">2nd Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>DJ set DM-50D valued at €249</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">3rd Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>DJ set DM-40D valued at €179</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="w-full h-1 bg-hot-pink rounded-full mt-16"></div>
                <div className="rounded-xl p-8 sm:p-12">
                  <h2 className="text-2xl sm:text-3xl font-Audiowide font-bold text-white mb-2">
                    Contestants to be announced
                  </h2>
                </div>
                <div className="w-full h-1 bg-hot-pink rounded-full"></div>
              </div>

              <div className="mt-8">
                <h2 className="text-1xl sm:text-2xl font-bold text-white font-Audiowide underline">Powered by</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div className="p-2">
                    <img
                      src="/images/Partners/Alphatheta_logo.png" 
                      alt="Partner 1"
                      className="w-full h-auto max-w-[300px] mx-auto"
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/images/Partners/Pioneer_logo.png"
                      alt="Partner 2" 
                      className="w-full h-auto max-w-[300px] mx-auto"
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/images/Partners/Pro_gear_logo.png"
                      alt="Partner 3"
                      className="w-full h-auto max-w-[1200px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* CComing soon */}    
        

{/* Contestants cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 hidden">
          {contestants.map((contestant, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-sm bg-white/5 backdrop-blur-sm border border-white/10 hover:border-hot-pink/20 transition-all hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={contestant.image}
                  alt={contestant.slot}
                  className="w-full h-full object-cover transition-transform"
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

        
      </div>
    </div>
  );
};

export default DJContest;