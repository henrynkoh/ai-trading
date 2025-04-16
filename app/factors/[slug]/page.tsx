import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

// This would be fetched from an API in a real application
const getFactorBySlug = (slug: string) => {
  const factors = [
    {
      slug: 'earnings',
      name: 'Earnings Reports',
      description: 'Companies often release earnings before or after market hours, impacting the opening and closing periods.',
      icon: '📊',
      fullDescription: `
        <h2>Impact on Opening 30 Minutes</h2>
        <p>Companies typically release quarterly earnings reports before market open or after market close. The market's reaction to these reports is most pronounced during the first 30 minutes of trading after the release.</p>
        
        <p>When a company announces earnings before the market opens, the opening 30 minutes often experiences:</p>
        <ul>
          <li>Significant price gaps (up or down) from the previous close</li>
          <li>Extremely high trading volume as institutions and traders position themselves</li>
          <li>Wider spreads and increased volatility</li>
          <li>Potential over-reactions that may reverse later in the day</li>
        </ul>
        
        <h2>Impact on Closing 30 Minutes</h2>
        <p>For companies announcing earnings after market close, the previous day's closing 30 minutes often show:</p>
        <ul>
          <li>Position squaring by day traders not wanting overnight exposure</li>
          <li>Increased volatility as traders speculate on the results</li>
          <li>Higher than normal volume in the specific stock</li>
          <li>Potential momentum in the anticipated direction of the earnings</li>
        </ul>
        
        <h2>Trading Strategies</h2>
        <p>Effective strategies for trading around earnings during these critical periods include:</p>
        <ol>
          <li><strong>Gap and Go Strategy</strong>: Trading in the direction of the initial gap after an earnings surprise</li>
          <li><strong>Fade the Gap</strong>: Taking contrary positions when the initial reaction appears excessive</li>
          <li><strong>Pre-Earnings Momentum</strong>: Trading the momentum leading into earnings announcements during the closing period</li>
          <li><strong>Options Strategies</strong>: Using defined-risk options strategies to capitalize on increased volatility</li>
        </ol>
        
        <h2>Risk Management</h2>
        <p>Earnings announcements create elevated risk. Consider these risk management techniques:</p>
        <ul>
          <li>Using smaller position sizes due to increased volatility</li>
          <li>Setting wider stop losses to accommodate the increased price swings</li>
          <li>Considering options strategies that define maximum risk</li>
          <li>Having a plan for both positive and negative surprises</li>
        </ul>
      `,
      importance: 90,
      openingImpact: 95,
      closingImpact: 75,
      relatedFactors: ['News Events', 'Analyst Ratings', 'Market Sentiment'],
      examples: [
        {
          stock: 'AAPL',
          date: 'Feb 1, 2023',
          description: 'Apple reports strong earnings after hours, leading to a 5.5% gap up and continuing momentum in the first 30 minutes of trading.'
        },
        {
          stock: 'NFLX',
          date: 'July 19, 2022',
          description: 'Netflix rebounds 12% in the opening 30 minutes after reporting subscriber growth that beat lowered expectations.'
        }
      ]
    },
    {
      slug: 'volume',
      name: 'Trading Volume',
      description: 'Volume spikes during the first and last 30 minutes indicate institutional activity and direction.',
      icon: '📈',
      fullDescription: `
        <h2>Volume Patterns in Opening 30 Minutes</h2>
        <p>The first 30 minutes of the trading day typically accounts for approximately 15-20% of the entire day's trading volume. This concentration of activity creates unique opportunities and challenges for traders.</p>
        
        <p>Key volume characteristics during the opening 30 minutes:</p>
        <ul>
          <li>Initial auction volume that sets opening prices</li>
          <li>Heavy institutional participation establishing positions</li>
          <li>Retail trader activity responding to overnight news</li>
          <li>Volume spikes that can signal the day's direction</li>
          <li>Block trades that may indicate significant institutional interest</li>
        </ul>
        
        <h2>Volume Patterns in Closing 30 Minutes</h2>
        <p>The final 30 minutes of trading typically accounts for 15-25% of the day's volume, with the closing auction representing a significant portion of this activity.</p>
        
        <p>Key volume characteristics during the closing 30 minutes:</p>
        <ul>
          <li>Institutional rebalancing and position adjustments</li>
          <li>Index fund trading to match closing prices</li>
          <li>Market-on-Close (MOC) orders that can drive significant volume</li>
          <li>Day trader position unwinding</li>
          <li>Retail trader activity after work hours</li>
        </ul>
        
        <h2>Volume-Based Trading Strategies</h2>
        <p>Effective strategies for trading based on volume during these critical periods include:</p>
        <ol>
          <li><strong>Volume Breakout Strategy</strong>: Identifying price breakouts confirmed by significant volume increases</li>
          <li><strong>Volume Divergence</strong>: Spotting price movements not supported by corresponding volume</li>
          <li><strong>Opening Range with Volume Confirmation</strong>: Trading breakouts of the first 15-minute range with volume confirmation</li>
          <li><strong>Closing Auction Imbalance</strong>: Trading based on substantial order imbalances reported before market close</li>
        </ol>
        
        <h2>Volume Analysis Tools</h2>
        <p>Tools and indicators that help traders analyze volume effectively:</p>
        <ul>
          <li>Volume-weighted average price (VWAP)</li>
          <li>On-balance volume (OBV)</li>
          <li>Volume profile</li>
          <li>Market depth and Level II data</li>
          <li>Time and sales data</li>
        </ul>
      `,
      importance: 80,
      openingImpact: 75,
      closingImpact: 95,
      relatedFactors: ['Technical Indicators', 'Order Imbalances', 'Sector Trends'],
      examples: [
        {
          stock: 'SPY',
          date: 'March 15, 2023',
          description: 'S&P 500 ETF shows 3x normal volume in first 30 minutes after Fed announcement, leading to a significant trend day.'
        },
        {
          stock: 'GME',
          date: 'January 28, 2021',
          description: 'GameStop experiences massive volume surge in closing 30 minutes as retail traders pile in before overnight holding restrictions.'
        }
      ]
    }
  ];
  
  return factors.find(factor => factor.slug === slug);
};

export default function FactorPage({ params }: { params: { slug: string } }) {
  const factor = getFactorBySlug(params.slug);
  
  if (!factor) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 px-6 md:px-12 bg-primary-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <Link 
              href="/factors" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Factors
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center">
                <div className="text-5xl mr-4">{factor.icon}</div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
                  {factor.name}
                </h1>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <div className="text-sm text-slate-500 dark:text-slate-400">Importance:</div>
                <div className="w-32 bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${factor.importance}%` }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-primary-600 dark:text-primary-400">{factor.importance}%</div>
              </div>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              {factor.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                <div className="prose prose-primary dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: factor.fullDescription }} />
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Impact by Period
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Opening 30 Min</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{factor.openingImpact}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${factor.openingImpact}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Closing 30 Min</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{factor.closingImpact}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-accent-500 h-2 rounded-full" 
                        style={{ width: `${factor.closingImpact}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Related Factors
                </h3>
                
                <ul className="space-y-2">
                  {factor.relatedFactors.map((relatedFactor, index) => (
                    <li key={index}>
                      <Link 
                        href={`/factors/${relatedFactor.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        {relatedFactor}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-200">
              Real-World Examples
            </h2>
            
            <div className="space-y-6">
              {factor.examples.map((example, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-4 py-2">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {example.stock} - {example.date}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {example.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary-100 dark:bg-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-900 dark:text-primary-100">
              Ready to Learn More?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Explore our courses to master trading strategies around {factor.name.toLowerCase()} during the critical 30-minute windows.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/education" 
                className="btn-primary"
              >
                Browse Courses
              </Link>
              <Link 
                href="/factors" 
                className="btn-secondary"
              >
                Explore Other Factors
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 