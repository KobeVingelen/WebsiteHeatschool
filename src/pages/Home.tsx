import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/About/AboutSection';
import GrainBackground from '../components/GrainBackground';

const Home = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen">
        <GrainBackground />
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/src/public/images/BackgroundvideoHD.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* About Section with Top Border */}
      <section className="relative  flex items-center justify-center px-4 sm:px-6 lg:px-8 py-48 bg-black">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-hot-pink to-transparent" />
         
        </div>
        <AboutSection />
      </section>
    </>
  );
};

export default Home;