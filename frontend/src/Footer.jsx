import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons text-primary text-2xl animate-pulse">upgrade</span>
              <span className="font-bold text-xl text-white">Career<span className="text-primary">Ladder</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping professionals navigate the complexities of modern careers with data, structure, and community.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Features', 'Pricing', 'Mentors', 'Success Stories'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Blog', 'Salary Calculator', 'Resume Builder', 'Help Center'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Stay Updated</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Enter your email" type="email"/>
              <button className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 rounded-lg transition-all hover:shadow-[0_0_15px_rgba(78,159,61,0.4)] transform hover:scale-[1.02]">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2023 CareerLadder Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;