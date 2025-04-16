"use client";

import { useState, useEffect } from 'react';

const MarketTimeBanner = () => {
  const [marketStatus, setMarketStatus] = useState('closed');
  const [timeRemaining, setTimeRemaining] = useState('');
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);
  const [isClosePeriod, setIsClosePeriod] = useState(false);
  
  useEffect(() => {
    // Function to calculate market status and time
    const calculateMarketStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
      
      // Check if it's a weekday
      const isWeekday = dayOfWeek > 0 && dayOfWeek < 6;
      
      if (!isWeekday) {
        setMarketStatus('closed');
        setTimeRemaining('Market opens on Monday');
        setIsOpenPeriod(false);
        setIsClosePeriod(false);
        return;
      }

      // Convert to 24-hour time for easier comparison
      const timeInMinutes = hours * 60 + minutes;
      
      // Market opening: 9:30 AM - 10:00 AM (570 - 600 minutes)
      // Market closing: 3:30 PM - 4:00 PM (930 - 960 minutes)
      // Regular market hours: 9:30 AM - 4:00 PM (570 - 960 minutes)
      
      const marketOpenStart = 570; // 9:30 AM
      const marketOpenEnd = 600;   // 10:00 AM
      const marketCloseStart = 930; // 3:30 PM
      const marketCloseEnd = 960;   // 4:00 PM
      
      // Check if currently in opening 30 minutes
      if (timeInMinutes >= marketOpenStart && timeInMinutes < marketOpenEnd) {
        setMarketStatus('open');
        const remaining = marketOpenEnd - timeInMinutes;
        setTimeRemaining(`Opening period: ${remaining} min remaining`);
        setIsOpenPeriod(true);
        setIsClosePeriod(false);
      } 
      // Check if currently in closing 30 minutes
      else if (timeInMinutes >= marketCloseStart && timeInMinutes < marketCloseEnd) {
        setMarketStatus('open');
        const remaining = marketCloseEnd - timeInMinutes;
        setTimeRemaining(`Closing period: ${remaining} min remaining`);
        setIsOpenPeriod(false);
        setIsClosePeriod(true);
      }
      // Check if market is open (regular trading hours)
      else if (timeInMinutes >= marketOpenStart && timeInMinutes < marketCloseEnd) {
        setMarketStatus('open');
        
        // Calculate the next critical period (closing 30 min)
        const remaining = marketCloseStart - timeInMinutes;
        setTimeRemaining(`Regular trading: ${remaining} min until closing period`);
        setIsOpenPeriod(false);
        setIsClosePeriod(false);
      }
      // Pre-market (before 9:30 AM)
      else if (timeInMinutes < marketOpenStart) {
        setMarketStatus('pre-market');
        const remaining = marketOpenStart - timeInMinutes;
        setTimeRemaining(`Pre-market: ${remaining} min until opening`);
        setIsOpenPeriod(false);
        setIsClosePeriod(false);
      }
      // After-hours (after 4:00 PM)
      else {
        setMarketStatus('closed');
        setTimeRemaining('Market closed for the day');
        setIsOpenPeriod(false);
        setIsClosePeriod(false);
      }
    };
    
    // Calculate immediately and then every minute
    calculateMarketStatus();
    const interval = setInterval(calculateMarketStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getBannerClass = () => {
    if (isOpenPeriod || isClosePeriod) {
      return 'bg-accent-600 text-white';
    }
    
    switch (marketStatus) {
      case 'open':
        return 'bg-green-600 text-white';
      case 'pre-market':
        return 'bg-amber-500 text-white';
      case 'closed':
      default:
        return 'bg-slate-700 text-white';
    }
  };
  
  return (
    <div className={`py-3 px-6 text-center ${getBannerClass()}`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="font-semibold">
          {isOpenPeriod && '🔔 Market Opening Period'}
          {isClosePeriod && '🔔 Market Closing Period'}
          {!isOpenPeriod && !isClosePeriod && `Market Status: ${marketStatus.toUpperCase()}`}
        </div>
        <div>{timeRemaining}</div>
        {(isOpenPeriod || isClosePeriod) && (
          <div className="animate-pulse bg-white bg-opacity-20 rounded-md px-3 py-1">
            Critical Trading Window Active
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketTimeBanner; 