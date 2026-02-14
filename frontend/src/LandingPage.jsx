import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Roadmap from './Roadmap';
import Pricing from './Pricing';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark">
      <Header />
      <main>
        <Hero />
        <Roadmap />
        <Pricing />
      </main>
   
    </div>
  );
};

export default LandingPage;