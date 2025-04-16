import { NextResponse } from 'next/server';

type MarketIndex = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
};

// Simulated market data - in a real app, this would come from a financial API
const marketIndices: MarketIndex[] = [
  { symbol: 'SPY', price: 515.27, change: 3.42, changePercent: 0.67, volume: 57892103 },
  { symbol: 'QQQ', price: 438.91, change: 2.15, changePercent: 0.49, volume: 31526872 },
  { symbol: 'DIA', price: 383.76, change: -0.54, changePercent: -0.14, volume: 2894621 },
  { symbol: 'IWM', price: 202.32, change: 1.87, changePercent: 0.93, volume: 35261487 },
];

export async function GET() {
  try {
    // In a real app, you would fetch this data from a financial data provider
    // For now, we'll return the mock data with slight random variations
    
    const updatedIndices = marketIndices.map(index => {
      const randomChange = (Math.random() * 2 - 1) * 0.5;
      const newPrice = +(index.price + randomChange).toFixed(2);
      const newChange = +(index.change + randomChange).toFixed(2);
      const newChangePercent = +((newChange / (newPrice - newChange)) * 100).toFixed(2);
      const volumeChange = Math.floor(Math.random() * 1000000);
      
      return {
        ...index,
        price: newPrice,
        change: newChange,
        changePercent: newChangePercent,
        volume: index.volume + volumeChange
      };
    });
    
    // Add metadata about market status
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const day = now.getDay();
    
    const isWeekday = day >= 1 && day <= 5;
    const isMarketHours = (hour > 9 || (hour === 9 && minute >= 30)) && hour < 16;
    const marketOpen = isWeekday && isMarketHours;
    
    return NextResponse.json({
      marketOpen,
      timestamp: now.toISOString(),
      indices: updatedIndices
    });
  } catch (error) {
    console.error('Error fetching market data:', error);
    // Return a simpler response to avoid any serialization issues
    return NextResponse.json(
      { error: 'Failed to fetch market data', marketOpen: false, indices: [] },
      { status: 500 }
    );
  }
} 