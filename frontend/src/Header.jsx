import React from 'react';

const Header = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-cream/90 dark:bg-onyx/90 backdrop-blur-md border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <span className="material-icons text-primary text-3xl transition-transform group-hover:rotate-180 duration-700">upgrade</span>
            <span className="font-bold text-2xl tracking-tight text-onyx dark:text-white">Career<span className="text-primary">Ladder</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-onyx dark:text-platinum hover:text-primary dark:hover:text-primary transition-colors font-medium relative group" href="#">
              Pathways
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="text-onyx dark:text-platinum hover:text-primary dark:hover:text-primary transition-colors font-medium relative group" href="#">
              Mentors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="text-onyx dark:text-platinum hover:text-primary dark:hover:text-primary transition-colors font-medium relative group" href="#">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-onyx dark:text-white hover:text-primary transition-colors">
              <span className="material-icons text-2xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;