import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Iridescence from './Iridescence';
import './index.css';

function App() {
  return (
    // The 'dark' class here forces dark mode. Remove it or manage it with state to toggle light mode.
    <div className="dark">
      <Iridescence className="pointer-events-none fixed inset-0 w-full h-full -z-10" color={[0.9,0.85,1]} speed={0.6} amplitude={0.08} mouseReact={false} />

      <div className="relative z-10 text-text-main-light dark:text-text-main-dark font-display transition-colors duration-300 antialiased min-h-screen flex flex-col">
        <div className="relative z-10 flex-1">
          <Header />
          <LandingPage />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;