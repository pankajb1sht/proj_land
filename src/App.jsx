import React from 'react';
import Navbar from './Navbar';
import LiveStatsBar from './LiveStatsBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SocialProof from './SocialProof';
import Roadmap from './Roadmap';
import BuySection from './BuySection';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative w-full overflow-x-hidden font-['Space_Grotesk']">
      {/* Gradient Blobs */}
      <div className="gradient-blob top-left absolute inset-0 z-0" />
      <div className="gradient-blob bottom-right absolute inset-0 z-0" />
      
      <Navbar />
      <main className="flex-1 w-full pt-[20px]">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden  bg-[rgba(10,6,18,0.95)]">
          <HeroSection />
        </section>
        
        {/* About Section */}
        <section className="w-full relative overflow-hidden  bg-[rgba(10,6,18,0.95)]">
          <AboutSection />
        </section>
        
        {/* Social Proof Section */}
        <section className="w-full relative overflow-hidden  bg-[rgba(10,6,18,0.95)]">
          <SocialProof />
        </section>
        
        {/* Roadmap Section */}
        <section className="w-full relative overflow-hidden  bg-[rgba(10,6,18,0.95)]">
          <Roadmap />
        </section>
        
        {/* Buy Section */}
        <section className="w-full relative overflow-hidden  bg-[rgba(10,6,18,0.95)]">
          <BuySection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
