import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Sequence Animations
    tl.from(badgeRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    })
    .from(titleRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    }, "-=0.4")
    .from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(buttonsRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    }, "-=0.6")
    .from(statsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(cardRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out'
    }, "-=1.0");

    // Continuous Floating Animation for the Card
    gsap.to(cardRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.08] dark:opacity-[0.05]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-left space-y-8">
            
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              New Career Modules v2.0
            </div>
            
            {/* Title */}
            <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold leading-tight text-onyx dark:text-white">
              <span className="block">Navigate Your</span>
              <span className="block text-primary glow-text">Career Path</span>
              <span className="block">with Precision.</span>
            </h1>
            
            {/* Description */}
            <p ref={textRef} className="text-xl text-text-muted-light dark:text-gray-400 max-w-lg leading-relaxed">
              Stop guessing your next move. Follow our data-driven, step-by-step guides to unlock your potential and double your salary.
            </p>
            
            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1">
                Start Your Journey
                <span className="material-icons text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="group bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-onyx dark:text-white border border-black/10 dark:border-white/10 text-lg px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <span className="material-icons text-primary group-hover:scale-110 transition-transform">play_circle_filled</span>
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div ref={statsRef} className="pt-8 border-t border-black/10 dark:border-white/10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-onyx dark:text-white">50k+</p>
                <p className="text-sm text-text-muted-light dark:text-gray-400">Careers Launched</p>
              </div>
              <div className="h-10 w-px bg-black/10 dark:bg-white/10"></div>
              <div>
                <p className="text-3xl font-bold text-onyx dark:text-white">94%</p>
                <p className="text-sm text-text-muted-light dark:text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image / Card */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
            {/* Added ref={cardRef} here and removed animate-float class */}
            <div ref={cardRef} className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-primary/20 bg-sage dark:bg-card-darker group">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-3/4 self-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-icons text-white text-sm">trending_up</span>
                    </div>
                    <div className="text-sm font-medium text-white">Projected Growth</div>
                  </div>
                  <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-3/4 rounded-full relative overflow-hidden"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
                   <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full border-r-2 border-orange/80 animate-spin-reverse"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <span className="text-5xl font-bold text-white tracking-tighter glow-text">Lvl 4</span>
                    <p className="text-orange text-sm font-mono mt-2 uppercase tracking-widest font-bold">Senior Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;