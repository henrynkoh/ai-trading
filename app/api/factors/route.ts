import { NextResponse } from 'next/server';

type Factor = {
  id: number;
  name: string;
  description: string;
  icon: string;
  link: string;
  importance: number;
  openingImpact: number;
  closingImpact: number;
};

export async function GET() {
  // In a real app, this would fetch data from a database or external API
  const factors: Factor[] = [
    {
      id: 1,
      name: 'Earnings Reports',
      description: 'Companies often release earnings before or after market hours, impacting the opening and closing periods.',
      icon: '📊',
      link: '/factors/earnings',
      importance: 90,
      openingImpact: 95,
      closingImpact: 75,
    },
    {
      id: 2,
      name: 'Market Sentiment',
      description: 'Social media, news sentiment, and investor mood significantly affect early and late trading.',
      icon: '😀',
      link: '/factors/sentiment',
      importance: 85,
      openingImpact: 90,
      closingImpact: 85,
    },
    {
      id: 3,
      name: 'Trading Volume',
      description: 'Volume spikes during the first and last 30 minutes indicate institutional activity and direction.',
      icon: '📈',
      link: '/factors/volume',
      importance: 80,
      openingImpact: 75,
      closingImpact: 95,
    },
    {
      id: 4,
      name: 'Technical Indicators',
      description: 'Indicators like RSI, MACD and moving averages signal momentum shifts at open and close.',
      icon: '📉',
      link: '/factors/technical',
      importance: 75,
      openingImpact: 70,
      closingImpact: 80,
    },
    {
      id: 5,
      name: 'News Events',
      description: 'Breaking news, product launches, or corporate announcements drive rapid price changes.',
      icon: '📰',
      link: '/factors/news',
      importance: 85,
      openingImpact: 90,
      closingImpact: 60,
    },
    {
      id: 6,
      name: 'Analyst Ratings',
      description: 'Upgrades, downgrades or price target changes often occur before market open.',
      icon: '🔍',
      link: '/factors/analyst-ratings',
      importance: 80,
      openingImpact: 85,
      closingImpact: 50,
    },
    {
      id: 7,
      name: 'Sector Trends',
      description: 'Industry-wide movements create momentum in the first and last 30 minutes.',
      icon: '🏭',
      link: '/factors/sectors',
      importance: 70,
      openingImpact: 65,
      closingImpact: 70,
    },
    {
      id: 8,
      name: 'Geopolitical Events',
      description: 'Global events and policy changes often impact opening prices after overnight developments.',
      icon: '🌎',
      link: '/factors/geopolitical',
      importance: 75,
      openingImpact: 80,
      closingImpact: 60,
    },
    {
      id: 9,
      name: 'Macroeconomic Data',
      description: 'Economic reports like jobs data or GDP usually release before market open.',
      icon: '💰',
      link: '/factors/economic-data',
      importance: 80,
      openingImpact: 90,
      closingImpact: 55,
    },
    {
      id: 10,
      name: 'Order Imbalances',
      description: 'Pre-market and closing auction imbalances signal potential price direction.',
      icon: '⚖️',
      link: '/factors/order-imbalances',
      importance: 75,
      openingImpact: 70,
      closingImpact: 90,
    },
  ];

  return NextResponse.json(factors);
} 