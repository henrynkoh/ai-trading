"use client";

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MarketTimeBanner from '@/components/home/MarketTimeBanner';
import FeatureCard from '@/components/home/FeatureCard';
import FactorsList from '@/components/home/FactorsList';
import MarketDashboard from '@/components/home/MarketDashboard';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <MarketTimeBanner />
      
      <section className="py-12 px-6 md:px-12 bg-gradient-to-b from-primary-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900 dark:text-primary-100">
              Master the Critical 30 Minutes
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              AI-powered education for trading the first and last 30 minutes of market hours
            </p>
          </div>
          
          <div className="mb-12">
            <MarketDashboard />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-primary-800 dark:text-primary-200">
                Why These 30 Minutes Matter
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                The opening (9:30-10:00 AM) and closing (3:30-4:00 PM) periods of NYSE and NASDAQ 
                trading sessions experience the highest volatility and volume, creating unique 
                opportunities for informed traders.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Our AI-powered platform helps you understand the key factors driving price 
                movements during these critical windows.
              </p>
              <div>
                <button 
                  onClick={() => handleNavigate('/education')}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Start Learning
                </button>
                <button 
                  onClick={() => handleNavigate('/factors')}
                  className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-md transition-colors ml-4"
                >
                  Explore Key Factors
                </button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800" 
                alt="Stock market chart" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary-800 dark:text-primary-200">
              Two Key Focuses of Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                title="10 Key Market Factors" 
                description="Learn how earnings, volume, news events, and other critical factors influence stock prices during market open and close."
                icon="ChartBarIcon"
                ctaText="Explore Factors"
                ctaLink="/factors"
              />
              <FeatureCard 
                title="Investor Sentiment Analysis" 
                description="Understand how social media, news, and market sentiment drive price movements in the first and last 30 minutes."
                icon="ChatBubbleBottomCenterTextIcon"
                ctaText="Analyze Sentiment"
                ctaLink="/sentiment"
              />
            </div>
          </div>
          
          <FactorsList />
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 