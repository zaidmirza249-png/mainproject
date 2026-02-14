import React from 'react';

const Pricing = () => {
  return (
    <section className="py-24 bg-white dark:bg-card-darker relative overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-onyx dark:text-white mb-4">Invest in Your Future</h2>
          <p className="text-text-muted-light dark:text-gray-400">Choose the plan that fits your career stage.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          <div className="card-interaction bg-background-light dark:bg-card-dark p-8 rounded-2xl border border-black/10 dark:border-white/5 hover:border-primary/30 transition-all">
            <h3 className="text-xl font-bold text-onyx dark:text-white">Starter</h3>
            <p className="text-sm text-text-muted-light dark:text-gray-400 mt-1">For exploration</p>
            <div className="my-6">
              <span className="text-4xl font-bold text-onyx dark:text-white">$0</span>
            </div>
            <button className="w-full py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white font-medium transition-colors">Get Started Free</button>
          </div>

          <div className="bg-sage dark:bg-card-darker relative p-8 rounded-2xl border-2 border-primary shadow-xl transform scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <h3 className="text-xl font-bold text-white">Climber</h3>
            <p className="text-sm text-white/80 mt-1">For active job seekers</p>
            <div className="my-6">
              <span className="text-5xl font-bold text-white">$29</span>
            </div>
            <button className="w-full py-3 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors">Start Climbing</button>
          </div>

          <div className="card-interaction bg-background-light dark:bg-card-dark p-8 rounded-2xl border border-black/10 dark:border-white/5 hover:border-primary/30 transition-all">
            <h3 className="text-xl font-bold text-onyx dark:text-white">Executive</h3>
            <p className="text-sm text-text-muted-light dark:text-gray-400 mt-1">For leadership roles</p>
            <div className="my-6">
              <span className="text-4xl font-bold text-onyx dark:text-white">$99</span>
            </div>
            <button className="w-full py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white font-medium transition-colors">Go Executive</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;