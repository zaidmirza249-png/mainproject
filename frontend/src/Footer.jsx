import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">A</div>
              <span className="text-lg font-bold text-onyx dark:text-white">Acme Careers</span>
            </div>
            <p className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark max-w-sm">Helping people climb the career ladder with focused training, coaching, and resources.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 flex-1">
            <div>
              <h4 className="font-semibold text-onyx dark:text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-onyx dark:text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-onyx dark:text-white mb-3">Follow</h4>
              <div className="flex space-x-3">
                <a href="#" aria-label="Twitter" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.11 1.53-1.92-.68.4-1.43.69-2.23.85C18.3 4.5 17.34 4 16.28 4c-1.66 0-3 1.34-3 3 0 .24.03.47.08.69C10.6 8.55 8.07 7.1 6.15 4.84c-.27.46-.43 1-.43 1.58 0 1.09.55 2.05 1.38 2.61-.51-.02-.99-.16-1.41-.39v.04c0 1.52 1.08 2.79 2.52 3.08-.26.07-.53.11-.81.11-.2 0-.39-.02-.58-.06.39 1.21 1.52 2.09 2.86 2.12C8.07 17.4 6.49 18 4.79 18c-.33 0-.65-.02-.97-.06C3.29 19.17 4.42 20 5.79 20c7.54 0 11.67-6.28 11.67-11.72 0-.18 0-.35-.01-.53.8-.58 1.5-1.3 2.05-2.12-.74.33-1.54.55-2.38.65z"/></svg>
                </a>
                <a href="#" aria-label="GitHub" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.67 3.03 8.63 7.24 10.03.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.95.64-3.58-1.42-3.58-1.42-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.09-.69.37-1.15.67-1.41-2.36-.27-4.84-1.18-4.84-5.27 0-1.16.41-2.11 1.08-2.86-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.9 1.08a10.03 10.03 0 012.64-.36c.9.01 1.81.12 2.64.36 2.02-1.36 2.9-1.08 2.9-1.08.57 1.48.22 2.57.11 2.84.67.75 1.08 1.7 1.08 2.86 0 4.1-2.48 5-4.84 5.26.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.94 0 .28.19.62.73.51 4.21-1.4 7.24-5.35 7.24-10.02C23.02 5.25 18.27.5 12 .5z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.98 1.98 1.98S6.96 6.58 6.96 5.48 6.08 3.5 4.98 3.5zM3.5 8.98h3v11.02h-3V8.98zM9.5 8.98h2.88v1.5h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.98 3.58 4.56v6.54h-3V14.3c0-1.39-.02-3.18-1.94-3.18-1.95 0-2.25 1.52-2.25 3.07v5.33h-3V8.98z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-black/5 dark:border-white/5 pt-6 flex flex-col md:flex-row md:justify-between items-center text-sm text-text-muted-light dark:text-text-muted-dark">
          <p>© {new Date().getFullYear()} Acme Careers. All rights reserved.</p>
          <div className="mt-3 md:mt-0">Built with <span role="img" aria-label="love">❤️</span></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;