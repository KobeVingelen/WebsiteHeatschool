import React from 'react';
import { Music, Send, Headphones } from 'lucide-react';
import SoundCloudPlayer from '../components/SoundCloudPlayer';

import GrainBackground from '../components/GrainBackground';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from '../components/Button';

const contestants = [
  {
    slot: "DAMIØN",
    genre: "...",
    image: '/images/DJ_contestants/Damion.PNG',
    trackUrl: "2033917816"
  },
  {
    slot: "Djemz",
    genre: "...",
    image: '/images/DJ_contestants/Djemz.PNG',
    trackUrl: "1938374630"
  },
  {
    slot: "LARS V ACKER",
    genre: "...",
    image: '/images/DJ_contestants/Larsvacker.PNG',
    trackUrl: "1979694303"
  },
  {
    slot: "TTT",
    genre: "...",
    image: '/images/DJ_contestants/TTT.PNG',
    trackUrl: "2031609444"
  },
  {
    slot: "Liam Kieboom",
    genre: "...",
    image: '/images/DJ_contestants/Liamkieboom.PNG',
    trackUrl: "2027551376"
  },
  {
    slot: "G.R.M",
    genre: "...",
    image: '/images/DJ_contestants/GRM.PNG',
    trackUrl: "2008426499"
  },
  {
    slot: "DJ Martini",
    genre: "...",
    image: '/images/DJ_contestants/Martini.PNG',
    trackUrl: "2044340368"
  },
  {
    slot: "2BESEEN",
    genre: "...",
    image: '/images/DJ_contestants/2beseen.PNG',
    trackUrl: "2042610929"
  },
  {
    slot: "BIBA",
    genre: "...",
    image: '/images/DJ_contestants/biba.PNG',
    trackUrl: "1968285371"
  },
  {
    slot: "Dazed",
    genre: "...",
    image: '/images/DJ_contestants/Dazed.PNG',
    trackUrl: "2028920708"
  },
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
                <p className="text-base sm:text-lg text-white text-center mb-6 sm:mb-4 px-2 sm:px-4" />
                <p className='font-bold text-center text-hot-pink text-xl'>HEY DJ!</p>
                <p className='font-bold text-center'>Do you dream of playing the same 360° stage as Barqiemoon, Bisoux and Skeletor Yogi</p>
                <p className='font-bold text-center'>During the HEAT DJ contest, only 6 talented DJs will get the chance to make the Boiler Room at Kavka Oudaan boil over. Grab your chance, send in your best set, and you might be the one to close the night as the winner and take home a prize from Pioneer DJ!</p>
              </div>
              <div className="max-w-4xl mx-auto text-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-Audiowide font-bold text-white">
                  Rounds
                </h2>
              </div>

              <div className="grid text-pretty grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
                {/* Round 1 */}
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none ">
                  <h3 className="text-xl font-bold text-left text-hot-pink mb-4">Round 1</h3>
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
                      <span>Deadline: <span className='font-extrabold'>02/03/2025</span></span>
                    </li>
                  </ul>
                </div>

                {/* Round 2 */}
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-left text-hot-pink mb-4">Round 2</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">

                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span className=''>Selection of our 10 favorite sets.</span>
                    </li>

                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span className=''>1 wildcard will been chosen by our line-up, advancing directly to the final.</span>
                    </li>

                  </ul>
                </div>

                {/* Round 3 */}
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-left text-hot-pink mb-4">Round 3</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>5 of the 10 finalists will advance to the final round through online public vote.</span>
                    </li>
                    <li>
                      <span>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-hot-pink rounded hover:bg-white hover:text-hot-pink transition-colors">
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_lwyVAR_lohMmf4lhntB9ZqpKAnIKwO8gt7jtrfGhQng1Kw/viewform" target="_blank" rel="noopener noreferrer">
                            Vote here!
                          </a>
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Round 4 */}
                <div className="p-6 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-left text-hot-pink mb-4">Round 4</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>20-minute live set @ HEAT boilerroom</span>
                    </li>

                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>Winners judged by crowd vote!</span>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="max-w-4xl mx-auto text-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-Audiowide font-bold text-white">
                  Prizes
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                <div className="p-4 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">1st Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span><a className='font-bold text-blue-400' href='https://www.progear.be/nl/alphatheta-ddj-grv6-ddj-grv6?colour=243057' target='_blank'>DDJ-GRV6</a> valued at €849,00</span>
                    </li>
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span>Closing set 03:00 - 04:00</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">2nd Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span><a className='font-bold text-blue-400' href='https://www.progear.be/nl/pioneer-dj-dm-50d-dm-50d?colour=243057' target='_blank'>DJ set DM-50D</a> valued at €249,00</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-xl font-bold text-hot-pink mb-4">3rd Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-hot-pink mr-2">•</span>
                      <span><a className='font-bold text-blue-400' href='https://www.progear.be/nl/pioneer-dj-dm-40d-dm-40d' target='_blank'>DJ set DM-40D</a> valued at €179,00</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contestants cards */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 ">
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

              <div className="mt-8">
                <h2 className="text-1xl sm:text-2xl font-bold text-white font-Audiowide underline">Powered by</h2>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center backdrop-blur-sm rounded-lg p-4 border border-white/5">
                  <div className="p-2">
                    <img
                      src="/images/Partners/Alphatheta_logo2.png"
                      alt="Partner 1"
                      className="w-full h-auto max-w-[300px] mx-auto"
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/images/Partners/Pioneer_logo_wit.png"
                      alt="Partner 2"
                      className="w-full h-auto max-w-[300px] mx-auto"
                    />
                  </div>
                  <div className="p-2">
                    <img
                      src="/images/Partners/Pro_gear_logo_wit.png"
                      alt="Partner 3"
                      className="w-full h-auto max-w-[1200px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJContest;