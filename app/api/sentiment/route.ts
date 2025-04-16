import { NextResponse } from 'next/server';

type SentimentData = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  marketSentiment: string;
  sentiment: {
    social: number;
    news: number;
    analyst: number;
    overall: number;
  };
  openingSignal: string;
  closingSignal: string;
};

export async function GET() {
  // In a real app, this would fetch data from a database or external API
  const sentimentData: SentimentData[] = [
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
    {
      symbol: 'META',
      name: 'Meta Platforms, Inc.',
      price: 332.17,
      change: -4.86,
      percentChange: -1.44,
      marketSentiment: 'Bearish',
      sentiment: {
        social: 42,
        news: 38,
        analyst: 55,
        overall: 45,
      },
      openingSignal: 'Sell',
      closingSignal: 'Hold',
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 486.20,
      change: 12.45,
      percentChange: 2.63,
      marketSentiment: 'Highly Bullish',
      sentiment: {
        social: 88,
        news: 82,
        analyst: 90,
        overall: 87,
      },
      openingSignal: 'Strong Buy',
      closingSignal: 'Buy',
    },
  ];

  return NextResponse.json(sentimentData);
} 