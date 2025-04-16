"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Factor {
  id: number;
  name: string;
  description: string;
  icon: string;
  importance: number;
  openingImpact: number;
  closingImpact: number;
}

export default function KeyFactorsPage() {
  const router = useRouter();
  const [factors, setFactors] = useState<Factor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFactors() {
      try {
        const response = await fetch('/api/factors');
        
        if (!response.ok) {
          throw new Error('Failed to fetch factors');
        }
        
        const data = await response.json();
        setFactors(data);
      } catch (error) {
        console.error('Error fetching factors:', error);
        setFactors([
          {
            id: 1,
            name: 'Earnings Reports',
            description: 'Companies often release earnings before or after market hours, impacting the opening and closing periods.',
            icon: '📊',
            importance: 90,
            openingImpact: 95,
            closingImpact: 75,
          },
          {
            id: 2,
            name: 'Market Sentiment',
            description: 'Social media, news sentiment, and investor mood significantly affect early and late trading.',
            icon: '😀',
            importance: 85,
            openingImpact: 90,
            closingImpact: 85,
          },
          {
            id: 3,
            name: 'Trading Volume',
            description: 'Volume spikes during the first and last 30 minutes indicate institutional activity and direction.',
            icon: '📈',
            importance: 80,
            openingImpact: 75,
            closingImpact: 95,
          },
          {
            id: 4,
            name: 'Technical Indicators',
            description: 'Indicators like RSI, MACD and moving averages signal momentum shifts at open and close.',
            icon: '📉',
            importance: 75,
            openingImpact: 70,
            closingImpact: 80,
          },
          {
            id: 5,
            name: 'News Events',
            description: 'Breaking news, product launches, or corporate announcements drive rapid price changes.',
            icon: '📰',
            importance: 85,
            openingImpact: 90,
            closingImpact: 60,
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchFactors();
  }, []);

  const handleFactorClick = (factorId: number) => {
    const factor = factors.find(f => f.id === factorId);
    if (factor) {
      // Display detailed information about the factor
      const detailedInfo = getDetailedInfo(factor);
      alert(detailedInfo);
    }
  };

  const getDetailedInfo = (factor: Factor): string => {
    return `${factor.name}

Impact: ${factor.importance}% overall importance
Opening 30 min impact: ${factor.openingImpact}%
Closing 30 min impact: ${factor.closingImpact}%

${factor.description}

Trading Strategies:
- Monitor ${factor.name.toLowerCase()} changes before market open
- Adjust position sizes based on expected volatility
- Use ${factor.openingImpact > factor.closingImpact ? 'opening' : 'closing'} period for optimal entry/exit`;
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 px-6 md:px-12 bg-primary-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900 dark:text-primary-100">
              Key Market Factors
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              The 10 critical factors that drive price movements during market open and close
            </p>
          </div>
          
          <div className="mb-12">
            <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
              <h2>Why These Factors Matter</h2>
              <p>
                The opening (9:30-10:00 AM ET) and closing (3:30-4:00 PM ET) periods of trading 
                sessions are uniquely influenced by specific market factors. Understanding how 
                these factors interact during these critical windows is key to developing 
                effective trading strategies.
              </p>
              <p>
                Our AI-powered analysis has identified the most significant factors that 
                impact price movements during these periods, providing you with a framework 
                for making more informed trading decisions.
              </p>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {factors.map((factor) => (
                  <div 
                    key={factor.id}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleFactorClick(factor.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{factor.icon}</div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{factor.name}</h3>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6">{factor.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Importance</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{factor.importance}%</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full" 
                              style={{ width: `${factor.importance}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Opening Impact</span>
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{factor.openingImpact}%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                              <div 
                                className="bg-green-500 h-1.5 rounded-full" 
                                style={{ width: `${factor.openingImpact}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Closing Impact</span>
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{factor.closingImpact}%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                              <div 
                                className="bg-blue-500 h-1.5 rounded-full" 
                                style={{ width: `${factor.closingImpact}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-200">
              How to Use These Factors
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">
                  Preparation
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Before market open, analyze pre-market factors like earnings reports, news developments, 
                  and market sentiment indicators to anticipate potential movements.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">
                  Execution
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  During the critical 30-minute windows, monitor volume patterns, price action, 
                  and order flow to identify high-probability trading opportunities.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">
                  Analysis
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  After market close, review the day's performance against the factors in play, 
                  refining your understanding of how they influenced price action.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => router.push('/education')}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Explore Related Courses
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 