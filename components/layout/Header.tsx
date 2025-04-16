"use client";

import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => router.push('/')}
          className="text-2xl font-bold text-primary-600 dark:text-primary-400 bg-transparent border-none cursor-pointer"
        >
          TradingEdge
        </button>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => handleNavigation('/')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 bg-transparent border-none cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/education')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 bg-transparent border-none cursor-pointer"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/factors')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 bg-transparent border-none cursor-pointer"
              >
                Key Factors
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/sentiment')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 bg-transparent border-none cursor-pointer"
              >
                Sentiment
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/docs')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 bg-transparent border-none cursor-pointer"
              >
                Docs
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('/login')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 