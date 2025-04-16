"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Documentation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-12 px-6 md:px-12 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-primary-800 dark:text-primary-200">
            The Science Behind the First and Last 30 Minutes
          </h1>
          
          <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
              Market Dynamics Overview
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              The first 30 minutes (9:30-10:00 AM ET) and the last 30 minutes (3:30-4:00 PM ET) of trading on major exchanges
              like NYSE and NASDAQ exhibit unique characteristics that differ significantly from the rest of the trading day.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These periods are characterized by:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
              <li><span className="font-medium">Higher trading volume</span> - Up to 25% of daily volume can occur in these windows</li>
              <li><span className="font-medium">Increased volatility</span> - Price movements are often more pronounced</li>
              <li><span className="font-medium">Price discovery</span> - Markets adjusting to overnight news and positioning for the next day</li>
              <li><span className="font-medium">Institutional activity</span> - Large players typically trade more actively during these periods</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
                Opening 30 Minutes
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The opening period involves the market processing and reacting to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Overnight news developments</li>
                <li>Pre-market earnings announcements</li>
                <li>Economic data releases (8:30 AM ET)</li>
                <li>Overnight foreign market activity</li>
                <li>Analyst upgrades and downgrades</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                These factors create a price discovery process as market participants establish the fair value for securities
                based on new information.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
                Closing 30 Minutes
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The closing period is driven by different factors:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-2">
                <li>Index fund rebalancing</li>
                <li>Market-on-close (MOC) orders</li>
                <li>End-of-day positioning by institutional investors</li>
                <li>Hedging activity for options expiration</li>
                <li>Risk reduction before overnight hours</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                The closing price is particularly important as it's used for NAV calculations, margin requirements, and
                becomes the reference price for the next trading day.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
              Trading Strategies for These Windows
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Our platform focuses on helping you understand how specific factors influence price movements during
              these critical periods. Some common approaches include:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-slate-700 dark:text-slate-300 space-y-3">
              <li>
                <p className="font-medium">Opening Gap Strategy</p>
                <p className="text-sm">Analyzing overnight gaps and determining whether they're likely to fill or extend</p>
              </li>
              <li>
                <p className="font-medium">First Hour Breakout</p>
                <p className="text-sm">Trading breakouts from the initial range established in the first 30 minutes</p>
              </li>
              <li>
                <p className="font-medium">MOC Imbalance</p>
                <p className="text-sm">Trading in the direction of large market-on-close imbalances in the final 30 minutes</p>
              </li>
              <li>
                <p className="font-medium">End-of-Day Momentum</p>
                <p className="text-sm">Following strong directional moves into the close that may indicate follow-through the next day</p>
              </li>
            </ol>
            <div className="bg-primary-50 dark:bg-slate-700 p-4 rounded-md">
              <p className="text-slate-800 dark:text-slate-200 font-medium">
                Our AI-powered analysis helps you identify which factors are most relevant for specific
                securities and market conditions, allowing for more informed trading decisions during
                these critical time windows.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
              How Our Platform Helps
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              The Trading Edge platform provides:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 dark:border-slate-600 rounded-md p-4">
                <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Factor Analysis</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Our AI examines how each of the 10 key market factors impacts specific securities during
                  the opening and closing periods, with pattern recognition across historical data.
                </p>
              </div>
              <div className="border border-slate-200 dark:border-slate-600 rounded-md p-4">
                <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Sentiment Analysis</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Real-time processing of social media, news, and market data to gauge sentiment
                  and identify potential catalysts for price movements.
                </p>
              </div>
              <div className="border border-slate-200 dark:border-slate-600 rounded-md p-4">
                <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Educational Resources</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Comprehensive lessons and case studies on each factor, helping you develop
                  a framework for analyzing these critical trading periods.
                </p>
              </div>
              <div className="border border-slate-200 dark:border-slate-600 rounded-md p-4">
                <h3 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Action Framework</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Structured approach to making trading decisions based on the confluence of
                  factors and sentiment during the opening and closing periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 