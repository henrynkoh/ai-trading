"use client";

import { useRouter } from 'next/navigation';

// Define the 10 key factors that affect stock prices during open/close periods
const factors = [
  {
    id: 1,
    name: 'Earnings Reports',
    description: 'Companies often release earnings before or after market hours, impacting the opening and closing periods.',
    icon: '📊',
    link: '/factors/earnings',
  },
  {
    id: 2,
    name: 'Market Sentiment',
    description: 'Social media, news sentiment, and investor mood significantly affect early and late trading.',
    icon: '😀',
    link: '/factors/sentiment',
  },
  {
    id: 3,
    name: 'Trading Volume',
    description: 'Volume spikes during the first and last 30 minutes indicate institutional activity and direction.',
    icon: '📈',
    link: '/factors/volume',
  },
  {
    id: 4,
    name: 'Technical Indicators',
    description: 'Indicators like RSI, MACD and moving averages signal momentum shifts at open and close.',
    icon: '📉',
    link: '/factors/technical',
  },
  {
    id: 5,
    name: 'News Events',
    description: 'Breaking news, product launches, or corporate announcements drive rapid price changes.',
    icon: '📰',
    link: '/factors/news',
  },
  {
    id: 6,
    name: 'Analyst Ratings',
    description: 'Upgrades, downgrades or price target changes often occur before market open.',
    icon: '🔍',
    link: '/factors/analyst-ratings',
  },
  {
    id: 7,
    name: 'Sector Trends',
    description: 'Industry-wide movements create momentum in the first and last 30 minutes.',
    icon: '🏭',
    link: '/factors/sectors',
  },
  {
    id: 8,
    name: 'Geopolitical Events',
    description: 'Global events and policy changes often impact opening prices after overnight developments.',
    icon: '🌎',
    link: '/factors/geopolitical',
  },
  {
    id: 9,
    name: 'Macroeconomic Data',
    description: 'Economic reports like jobs data or GDP usually release before market open.',
    icon: '💰',
    link: '/factors/economic-data',
  },
  {
    id: 10,
    name: 'Order Imbalances',
    description: 'Pre-market and closing auction imbalances signal potential price direction.',
    icon: '⚖️',
    link: '/factors/order-imbalances',
  },
];

const FactorsList = () => {
  const router = useRouter();

  const handleFactorClick = (factorName: string) => {
    alert(`${factorName} factor details coming soon!`);
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary-800 dark:text-primary-200">
        10 Key Factors Affecting Stock Prices
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factors.map((factor) => (
          <div 
            key={factor.id}
            onClick={() => handleFactorClick(factor.name)}
            className="card p-5 hover:shadow-lg transition-all flex items-start bg-white dark:bg-slate-800 rounded-xl shadow cursor-pointer"
          >
            <div className="text-3xl mr-4">{factor.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">
                {factor.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {factor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <button 
          onClick={() => alert("Complete factors guide coming soon!")}
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Learn About All Factors
        </button>
      </div>
    </div>
  );
};

export default FactorsList; 