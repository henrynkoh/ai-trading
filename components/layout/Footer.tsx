"use client";

import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    if (path === '/education') {
      router.push(path);
    } else {
      alert(`${path.substring(1)} feature coming soon!`);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TradingEdge</h3>
            <p className="mb-4">
              The AI-powered platform for effective trading during market open and close.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleClick('/education')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleClick('/education/tutorials')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Tutorials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleClick('/education/webinars')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Webinars
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Analysis</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleClick('/factors')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Key Factors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleClick('/sentiment')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Sentiment Analysis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleClick('/screener')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Stock Screener
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleClick('/about')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleClick('/privacy')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleClick('/terms')}
                  className="hover:text-primary-400 bg-transparent border-none text-slate-300 cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} TradingEdge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 