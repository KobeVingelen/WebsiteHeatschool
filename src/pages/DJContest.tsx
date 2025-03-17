
import GrainBackground from '../components/GrainBackground';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Djcarousel from '../components/Carousel/Djcarousel';
import React, { useEffect, useState } from 'react';
import { Disc, Flame, Zap, Trophy, ArrowRight, Music2 } from 'lucide-react';

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
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  return (
    <div className="min-h-screen relative pt-24 px-4 sm:px-6 lg:px-8">
      <GrainBackground />
      <div className=" mx-auto relative z-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mt-8 mb-8 md:mb-10  fade-up">
          <h1 className="text-4xl font-Audiowide font-bold mb-2 text-white">
            DJ contest
          </h1>
          <div className="w-24 h-1 bg-heat-pink mx-auto rounded-full" />
        </div>

       

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            
            {/* Timeline for larger screens */}
            <div className="hidden md:block relative ">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-heat-pink to-transparent transform -translate-x-1/2" />

              <div className="space-y-24">
                <div className="relative  ">
                  <div className="flex items-center gap-4 ">
                    <div className="w-1/2 text-right pr-4 opacity-20">
                      <h3 className="text-2xl font-bold text-heat-pink mb-4">Round 1: Submit Your Mix</h3>
                      <p className="text-gray-300">Create a 20-minute set featuring your best Hardgroove and Trance tracks. Show us what makes you unique!</p>
                    </div>
                    <div className="relative z-10 bg-black rounded-full border border-gray-700 p-4">
                      <Music2 className="w-8 h-8 text-gray-700" />
                    </div>
                    <div className="w-1/2 pl-8 opacity-20">
                      <div className="text-sm text-heat-pink font-bold">Deadline: 02/03/2025</div>
                    </div>
                  </div>
                </div>

                <div className="relative ">
                  <div className="flex items-center gap-4">
                    <div className="w-1/2 text-right pr-4 opacity-20">
                      <div className="text-sm text-heat-pink font-bold">Expert Selection</div>
                    </div>
                    <div className="relative z-10 bg-black rounded-full border border-gray-700 p-4">
                      <Flame className="w-8 h-8 text-gray-700" />
                    </div>
                    <div className="w-1/2 pl-8 opacity-20">
                      <h3 className="text-2xl font-bold text-heat-pink mb-4">Round 2: Top 10 Selection</h3>
                      <p className="text-gray-300">Our panel of experts will select the top 10 mixes, with one wildcard chosen by our headliners.</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-1/2 text-right pr-4">
                      <h3 className="text-2xl font-bold text-heat-pink mb-4">Round 3: Community Vote</h3>
                      <p className="text-gray-300">The community decides! Top 5 DJs advance to the live finals.</p>
                    </div>
                    <div className="relative z-10 bg-black rounded-full border border-heat-pink p-4">
                      <Zap className="w-8 h-8 text-heat-pink" />
                    </div>
                    <div className="w-1/2 pl-8">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd_lwyVAR_lohMmf4lhntB9ZqpKAnIKwO8gt7jtrfGhQng1Kw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sx font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors "
                      >
                        Vote Now!
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-1/2 text-right pr-4">
                      <div className="text-sm text-heat-pink font-bold">Live Performance</div>
                    </div>
                    <div className="relative z-10 bg-black rounded-full border border-heat-pink p-4">
                      <Trophy className="w-8 h-8 text-heat-pink" />
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-2xl font-bold text-heat-pink mb-4">Round 4: Finals</h3>
                      <p className="text-gray-300">Perform live at HEAT's 360° stage and compete for amazing Pioneer DJ prizes!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden space-y-12">
              <div className="relative ">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-heat-pink to-transparent" />

                <div className="space-y-16">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-3 bg-black rounded-full p-3 z-10 border border-gray-700">
                      <Music2 className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className='opacity-20' >
                      <h3 className="text-xl font-bold text-heat-pink mb-2">Round 1: Submit Your Mix</h3>
                      <p className="text-gray-300 text-sm mb-2">Create a 20-minute set featuring your best Hardgroove and Trance tracks. Show us what makes you unique!</p>
                      <div className="text-sm text-heat-pink font-bold">Deadline: 02/03/2025</div>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 top-3 bg-black rounded-full p-3 z-10 border border-gray-700">
                      <Flame className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className='opacity-20'>
                      <h3 className="text-xl font-bold text-heat-pink mb-2">Round 2: Top 10 Selection</h3>
                      <p className="text-gray-300 text-sm mb-2">Our panel of experts will select the top 10 mixes, with one wildcard chosen by our headliners.</p>
                      <div className="text-sm text-heat-pink font-bold">Expert Selection</div>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 top-3 bg-black rounded-full p-3 z-10 border border-heat-pink">
                      <Zap className="w-6 h-6 text-heat-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-heat-pink mb-2">Round 3: Community Vote</h3>
                      <p className="text-gray-300 text-sm mb-4">The community decides! Top 5 DJs advance to the live finals.</p>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd_lwyVAR_lohMmf4lhntB9ZqpKAnIKwO8gt7jtrfGhQng1Kw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sx font-medium text-white bg-heat-pink rounded hover:bg-white hover:text-heat-pink transition-colors"
                      >
                        Vote Now!
                      </a>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 top-3 bg-black rounded-full p-3 z-10 border border-heat-pink">
                      <Trophy className="w-6 h-6 text-heat-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-heat-pink mb-2">Round 4: Finals</h3>
                      <p className="text-gray-300 text-sm mb-2">Perform live at HEAT's 360° stage and compete for amazing Pioneer DJ prizes!</p>
                      <div className="text-sm text-heat-pink font-bold">Live Performance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=" mx-auto text-center ">
                <h2 className="text-2xl sm:text-3xl font-Audiowide font-bold underline text-white">
                  Prizes
                </h2>
              </div>

              <div className="grid grid-cols-1 text-sm lg:text-xs sm:grid-cols-3 gap-4 mb-16 2xl:w-7/12 xl:w-8/12 lg:w-9/12  mt-4  mx-auto">
     
                <div className="p-4 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-lg font-bold text-heat-pink mb-4">1st Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-heat-pink mr-2">•</span>
                      <span><a className='font-bold text-blue-400' href='https://www.progear.be/nl/alphatheta-ddj-grv6-ddj-grv6?colour=243057' target='_blank'>DDJ-GRV6</a> valued at €849,00</span>
                    </li>
                    <li>
                      <span className="text-heat-pink mr-2">•</span>
                      <span>Closing set 03:00 - 04:00</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-lg font-bold text-heat-pink mb-4">2nd Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-heat-pink mr-2">•</span>
                      <span><a className='font-bold text-blue-400' href='https://www.progear.be/nl/pioneer-dj-dm-50d-dm-50d?colour=243057' target='_blank'>DJ set DM-50D</a> valued at €249,00</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-sm bg-white/5 backdrop-blur-sm border border-none">
                  <h3 className="text-lg font-bold text-heat-pink mb-4">3rd Place</h3>
                  <ul className="text-white flex flex-col text-left space-y-2">
                    <li>
                      <span className="text-heat-pink mr-2">•</span>
                      <span><a className='font-bold text-blue-400' href='https://www.progear.be/nl/pioneer-dj-dm-40d-dm-40d' target='_blank'>DJ set DM-40D</a> valued at €179,00</span>
                    </li>
                  </ul>
                </div>
              </div>
           
          
       


        <div className="2xl:w-8/12  xl:w-9/12 lg:w-11/12 mx-auto text-center  ">
          <h2 className="text-2xl sm:text-3xl font-Audiowide font-bold underline mb-4   text-white ">
            Contestants
          </h2>

          <Djcarousel contestants={contestants} />
        </div>

        <div className="2xl:w-7/12 xl:w-9/12 lg:w-11/12 w-10/12 mx-auto mt-8 mb-8">
          <h2 className="text-1xl sm:text-2xl font-bold text-center text-white font-Audiowide underline">Powered by</h2>
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
  );
};





export default DJContest;