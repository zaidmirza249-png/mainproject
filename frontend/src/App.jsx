import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import './index.css';

function App() {
  return (
    // The 'dark' class here forces dark mode. Remove it or manage it with state to toggle light mode.
    <div className="dark">
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-gray-100 font-display transition-colors duration-300 antialiased min-h-screen flex flex-col">
        <Header />
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;