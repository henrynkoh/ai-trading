"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';

type MarketData = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: number;
};

type ApiResponse = {
  marketOpen: boolean;
  timestamp: string;
  indices: MarketData[];
};

export default function MarketDashboard() {
  const [marketOpen, setMarketOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [marketIndices, setMarketIndices] = useState<MarketData[]>([
    { symbol: 'SPY', price: 515.27, change: 3.42, changePercent: 0.67 },
    { symbol: 'QQQ', price: 438.91, change: 2.15, changePercent: 0.49 },
    { symbol: 'DIA', price: 383.76, change: -0.54, changePercent: -0.14 },
    { symbol: 'IWM', price: 202.32, change: 1.87, changePercent: 0.93 },
  ]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Update current time and market data
    const fetchMarketData = async () => {
      try {
        const response = await axios.get<ApiResponse>('/api/market-data');
        if (response.data && response.data.indices && response.data.indices.length > 0) {
          setMarketIndices(response.data.indices);
          setMarketOpen(response.data.marketOpen);
          setCurrentTime(new Date(response.data.timestamp));
          setLoading(false);
        } else {
          // Use default data if response is empty
          console.warn('Empty data received, using defaults');
          setCurrentTime(new Date());
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching market data:', err);
        setError('Failed to load market data');
        setLoading(false);
        // No need to retry immediately - we'll wait for the next interval
      }
    };
    
    // Initial fetch
    fetchMarketData();
    
    // Set up intervals for updates
    const timeUpdateInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute
    
    const dataUpdateInterval = setInterval(() => {
      // We won't reset the error state or loading state here
      // This way, if there was an error, the user can still see the last good data
      if (!error) {
        fetchMarketData();
      }
    }, 30000); // Fetch new data every 30 seconds
    
    return () => {
      clearInterval(timeUpdateInterval);
      clearInterval(dataUpdateInterval);
    };
  }, [error]);
  
  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 w-full min-h-[160px] flex items-center justify-center">
        <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading market data...</div>
      </div>
    );
  }
  
  if (error && marketIndices.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 w-full min-h-[160px] flex items-center justify-center">
        <div className="text-red-500 dark:text-red-400">
          {error} - <button className="underline" onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 w-full">
      {error && (
        <div className="mb-2 text-xs text-red-500 dark:text-red-400 flex justify-end">
          <button className="underline" onClick={() => setError(null)}>Refresh data</button>
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Market Dashboard</h3>
        <div className="flex items-center">
          <div className={`h-2 w-2 rounded-full mr-2 ${marketOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {marketOpen ? 'Market Open' : 'Market Closed'}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-3">
            {format(currentTime, 'h:mm a')}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {marketIndices.map((index) => (
          <div key={index.symbol} className="border dark:border-gray-700 rounded p-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{index.symbol}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                index.change >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {index.change >= 0 ? '+' : ''}{index.changePercent}%
              </span>
            </div>
            <div className="mt-1">
              <span className="text-lg font-semibold">${index.price.toFixed(2)}</span>
              <span className={`text-sm ml-2 ${
                index.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}
              </span>
            </div>
            {index.volume && (
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Vol: {(index.volume / 1000000).toFixed(1)}M
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 