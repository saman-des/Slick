import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { BentoGrid } from './components/BentoGrid';
import { SecuritySection } from './components/SecuritySection';
import { AudienceSection } from './components/AudienceSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      
      {/* Main Container with Grid Lines effect */}
      <main className="border-x border-white/10 max-w-[1400px] mx-auto relative">
        <ProblemSection />
        <HowItWorks />
        <FeatureDeepDive />
        <BentoGrid />
        <SecuritySection />
        <AudienceSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
