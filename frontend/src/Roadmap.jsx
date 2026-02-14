import React from 'react';

const Roadmap = () => {
  return (
    <section className="relative py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="step-connector hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative bg-background-light dark:bg-background-dark inline-block left-1/2 transform -translate-x-1/2 px-8 z-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-onyx dark:text-white mb-4">Your Roadmap</h2>
          <p className="text-text-muted-light dark:text-gray-400 max-w-2xl mx-auto">Actionable steps to reach your potential.</p>
        </div>

        <div className="space-y-24">
          {/* Step 01 */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 group">
            <div className="lg:w-5/12 order-2 lg:order-1 text-right pr-8">
              <div className="card-interaction bg-card-light dark:bg-card-darker p-8 rounded-2xl shadow-lg border border-transparent dark:border-white/5 relative overflow-hidden text-white dark:text-gray-300">
                <span className="text-orange font-bold tracking-wider text-sm uppercase mb-2 block">Step 01</span>
                <h3 className="text-2xl font-bold text-white mb-4">Skills Assessment</h3>
                <p className="text-white/90 dark:text-gray-400">Identify your current strengths and gaps with our AI-powered assessment tool tailored to your industry.</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex">
              <div className="w-12 h-12 bg-background-light dark:bg-background-dark border-4 border-primary rounded-full flex items-center justify-center shadow-lg z-30">
                <span className="text-onyx dark:text-white font-bold">1</span>
              </div>
            </div>
            <div className="lg:w-5/12 order-1 lg:order-2 pl-8"></div>
          </div>

          {/* Step 02 */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 group">
            <div className="lg:w-5/12 order-1 text-right pr-8 lg:text-left lg:pr-0 lg:pl-8 lg:order-2">
              <div className="card-interaction bg-card-light dark:bg-card-darker p-8 rounded-2xl shadow-lg border border-transparent dark:border-white/5 relative overflow-hidden text-white dark:text-gray-300">
                <span className="text-orange font-bold tracking-wider text-sm uppercase mb-2 block">Step 02</span>
                <h3 className="text-2xl font-bold text-white mb-4">Strategic Upskilling</h3>
                <p className="text-white/90 dark:text-gray-400">Access curated micro-courses and projects designed to fill your skill gaps efficiently.</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex">
              <div className="w-12 h-12 bg-background-light dark:bg-background-dark border-4 border-primary rounded-full flex items-center justify-center shadow-lg z-30">
                <span className="text-onyx dark:text-white font-bold">2</span>
              </div>
            </div>
            <div className="lg:w-5/12 order-2 lg:order-1 pr-8"></div>
          </div>

          {/* Step 03 */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 group">
            <div className="lg:w-5/12 order-2 lg:order-1 text-right pr-8">
              <div className="card-interaction bg-card-light dark:bg-card-darker p-8 rounded-2xl shadow-lg border border-transparent dark:border-white/5 relative overflow-hidden text-white dark:text-gray-300">
                <span className="text-orange font-bold tracking-wider text-sm uppercase mb-2 block">Step 03</span>
                <h3 className="text-2xl font-bold text-white mb-4">Network & Launch</h3>
                <p className="text-white/90 dark:text-gray-400">Connect with mentors and apply to high-growth roles with our verified partner network.</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex">
              <div className="w-12 h-12 bg-background-light dark:bg-background-dark border-4 border-primary rounded-full flex items-center justify-center shadow-lg z-30">
                <span className="text-onyx dark:text-white font-bold">3</span>
              </div>
            </div>
            <div className="lg:w-5/12 order-1 lg:order-2 pl-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;