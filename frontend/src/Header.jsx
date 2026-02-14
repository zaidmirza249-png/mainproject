import React from 'react';

const Header = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <span className="material-icons text-primary text-3xl transition-transform group-hover:rotate-180 duration-700">upgrade</span>
            <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              Career<span className="text-primary group-hover:text-white transition-colors">Ladder</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Pathways', 'Mentors', 'Pricing'].map((item) => (
              <a key={item} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium relative group" href="#">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(78,159,61,0.3)] hover:shadow-[0_0_25px_rgba(78,159,61,0.6)]">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-primary transition-colors">
              <span className="material-icons text-2xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;