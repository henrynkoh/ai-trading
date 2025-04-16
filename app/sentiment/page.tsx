"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import SentimentOverview from '@/components/sentiment/SentimentOverview';
import SentimentDemo from '@/components/sentiment/SentimentDemo';
import { SentimentData } from '@/types';

export default function SentimentPage() {
  const router = useRouter();
  const [sentimentData, setSentimentData] = useState<SentimentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{key: keyof SentimentData, direction: 'asc' | 'desc'}>({
    key: 'symbol',
    direction: 'asc'
  });

  useEffect(() => {
    async function fetchSentimentData() {
      try {
        const response = await fetch('/api/sentiment');
        
        if (!response.ok) {
          throw new Error('Failed to fetch sentiment data');
        }
        
        const data = await response.json();
        setSentimentData(data);
      } catch (error) {
        console.error('Error fetching sentiment data:', error);
        // Fallback data in case the API fails
        setSentimentData([
          {
            symbol: 'AAPL',
            name: 'Apple Inc.',
            price: 182.63,
            change: 1.28,
            percentChange: 0.71,
            marketSentiment: 'Bullish',
            sentiment: {
              social: 78,
              news: 65,
              analyst: 82,
              overall: 75,
            },
            openingSignal: 'Strong Buy',
            closingSignal: 'Hold',
          },
          {
            symbol: 'MSFT',
            name: 'Microsoft Corporation',
            price: 378.85,
            change: -2.14,
            percentChange: -0.56,
            marketSentiment: 'Neutral',
            sentiment: {
              social: 62,
              news: 54,
              analyst: 76,
              overall: 64,
            },
            openingSignal: 'Hold',
            closingSignal: 'Buy',
          },
          {
            symbol: 'TSLA',
            name: 'Tesla, Inc.',
            price: 246.87,
            change: 5.23,
            percentChange: 2.16,
            marketSentiment: 'Highly Bullish',
            sentiment: {
              social: 92,
              news: 74,
              analyst: 68,
              overall: 78,
            },
            openingSignal: 'Strong Buy',
            closingSignal: 'Strong Buy',
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchSentimentData();
  }, []);

  const handleSort = (key: keyof SentimentData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...sentimentData].sort((a, b) => {
    if (sortConfig.key === 'sentiment') {
      if (a.sentiment.overall < b.sentiment.overall) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a.sentiment.overall > b.sentiment.overall) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    }
    
    const aValue = a[sortConfig.key] as any;
    const bValue = b[sortConfig.key] as any;
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(item => 
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.marketSentiment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSentimentColor = (value: number) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 60) return 'bg-green-300';
    if (value >= 40) return 'bg-yellow-300';
    if (value >= 20) return 'bg-red-300';
    return 'bg-red-500';
  };

  const getChangeColor = (value: number) => {
    return value >= 0 ? 'text-green-500' : 'text-red-500';
  };

  const getSignalClass = (signal: string) => {
    switch (signal) {
      case 'Strong Buy': return 'bg-green-500 text-white';
      case 'Buy': return 'bg-green-300 text-slate-800';
      case 'Hold': return 'bg-yellow-300 text-slate-800';
      case 'Sell': return 'bg-red-300 text-slate-800';
      case 'Strong Sell': return 'bg-red-500 text-white';
      default: return 'bg-slate-300 text-slate-800';
    }
  };

  const handleStockClick = (symbol: string) => {
    alert(`Detailed analysis for ${symbol} coming soon!`);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 px-6 md:px-12 bg-primary-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900 dark:text-primary-100">
              Market Sentiment Analysis
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              AI-powered sentiment insights for the critical 30-minute trading windows
            </p>
          </div>
          
          <div className="mb-12">
            <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
              <h2>Understanding Market Sentiment</h2>
              <p>
                Market sentiment is the collective attitude of investors toward a particular security or the 
                market as a whole. It's especially powerful during the first and last 30 minutes of trading, 
                when emotional reactions can drive significant price movements.
              </p>
              <p>
                Our AI analyzes millions of data points from social media, news sources, and analyst reports 
                to generate sentiment scores that can help you anticipate market movements during these 
                critical periods.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 md:mb-0">
                  Current Sentiment Data
                </h2>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search symbols or companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-64 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                    <thead className="bg-slate-100 dark:bg-slate-700">
                      <tr>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort('symbol')}
                        >
                          Symbol
                          {sortConfig.key === 'symbol' && (
                            <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort('name')}
                        >
                          Company
                          {sortConfig.key === 'name' && (
                            <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort('price')}
                        >
                          Price
                          {sortConfig.key === 'price' && (
                            <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort('percentChange')}
                        >
                          Change
                          {sortConfig.key === 'percentChange' && (
                            <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort('sentiment')}
                        >
                          Sentiment
                          {sortConfig.key === 'sentiment' && (
                            <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort('marketSentiment')}
                        >
                          Market View
                          {sortConfig.key === 'marketSentiment' && (
                            <span className="ml-1">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                          Signals
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                      {filteredData.map((item) => (
                        <tr 
                          key={item.symbol} 
                          className="hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                          onClick={() => handleStockClick(item.symbol)}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">
                            {item.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getChangeColor(item.percentChange)}`}>
                            {item.change > 0 ? '+' : ''}{item.change.toFixed(2)} ({item.percentChange > 0 ? '+' : ''}{item.percentChange.toFixed(2)}%)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="flex items-center mb-1">
                                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mr-2">
                                  <div 
                                    className={`${getSentimentColor(item.sentiment.overall)} h-2 rounded-full`} 
                                    style={{ width: `${item.sentiment.overall}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.sentiment.overall}</span>
                              </div>
                              <div className="flex text-xs text-slate-500 dark:text-slate-400 space-x-2">
                                <span>Social: {item.sentiment.social}</span>
                                <span>News: {item.sentiment.news}</span>
                                <span>Analyst: {item.sentiment.analyst}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">
                            {item.marketSentiment}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${getSignalClass(item.openingSignal)}`}>
                                Open: {item.openingSignal}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${getSignalClass(item.closingSignal)}`}>
                                Close: {item.closingSignal}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Social Media Sentiment
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Our AI analyzes millions of posts across Twitter, Reddit, and other platforms to gauge 
                  retail investor sentiment in real-time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Bullish: Increased buying interest</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Neutral: Mixed signals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">Bearish: Increased selling pressure</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  News Sentiment
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Our natural language processing algorithms assess the tone and impact of news articles 
                  and press releases.
                </p>
                <div className="text-sm text-slate-700 dark:text-slate-300">
                  <p className="mb-2">
                    <span className="font-semibold">Morning analysis:</span> Overnight news impact on opening prices
                  </p>
                  <p>
                    <span className="font-semibold">Afternoon analysis:</span> Day's news impact on closing prices
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Analyst Sentiment
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We track and analyze rating changes, price targets, and commentary from leading Wall Street analysts.
                </p>
                <div className="text-sm text-slate-700 dark:text-slate-300">
                  <p className="mb-2">
                    Upgrades and downgrades often have outsized impact during the opening 30 minutes
                  </p>
                  <p>
                    Price target changes can influence closing price action
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => router.push('/education')}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Learn More About Sentiment Trading
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 