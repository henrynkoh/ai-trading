const SentimentDemo = () => {
  const demoStocks = [
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

  const getSentimentBadgeClass = (sentiment: string) => {
    switch (sentiment) {
      case 'Highly Bullish':
        return 'bg-green-600 text-white';
      case 'Bullish':
        return 'bg-green-500 text-white';
      case 'Neutral':
        return 'bg-blue-500 text-white';
      case 'Bearish':
        return 'bg-red-500 text-white';
      case 'Highly Bearish':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getSignalBadgeClass = (signal: string) => {
    switch (signal) {
      case 'Strong Buy':
        return 'bg-green-600 text-white';
      case 'Buy':
        return 'bg-green-500 text-white';
      case 'Hold':
        return 'bg-blue-500 text-white';
      case 'Sell':
        return 'bg-red-500 text-white';
      case 'Strong Sell':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getSentimentBarColor = (score: number) => {
    if (score >= 75) return 'bg-green-500';
    if (score >= 60) return 'bg-green-400';
    if (score >= 45) return 'bg-blue-500';
    if (score >= 30) return 'bg-red-400';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-12 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-200">
        Sentiment Analysis Demo
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Below is a demonstration of how our AI analyzes sentiment for popular stocks during the first and last 30 minutes of trading. This sample data shows how different sentiment factors combine to create trading signals.
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-700">
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Stock</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Price</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Change</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Market Sentiment</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Sentiment Breakdown</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Signals</th>
            </tr>
          </thead>
          <tbody>
            {demoStocks.map((stock) => (
              <tr 
                key={stock.symbol} 
                className="border-b border-slate-200 dark:border-slate-700"
              >
                <td className="p-3">
                  <div className="font-bold text-slate-800 dark:text-slate-200">{stock.symbol}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stock.name}</div>
                </td>
                <td className="p-3 font-medium text-slate-800 dark:text-slate-200">
                  ${stock.price}
                </td>
                <td className="p-3">
                  <span className={stock.change >= 0 ? 'text-green-600' : 'text-red-500'}>
                    {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.percentChange}%)
                  </span>
                </td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSentimentBadgeClass(stock.marketSentiment)}`}>
                    {stock.marketSentiment}
                  </span>
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <span className="w-16 text-slate-600 dark:text-slate-400">Social:</span>
                      <div className="w-full max-w-[100px] bg-slate-200 dark:bg-slate-600 rounded-full h-1.5 mr-2">
                        <div 
                          className={`${getSentimentBarColor(stock.sentiment.social)} h-1.5 rounded-full`} 
                          style={{ width: `${stock.sentiment.social}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400">{stock.sentiment.social}</span>
                    </div>
                    
                    <div className="flex items-center text-xs">
                      <span className="w-16 text-slate-600 dark:text-slate-400">News:</span>
                      <div className="w-full max-w-[100px] bg-slate-200 dark:bg-slate-600 rounded-full h-1.5 mr-2">
                        <div 
                          className={`${getSentimentBarColor(stock.sentiment.news)} h-1.5 rounded-full`} 
                          style={{ width: `${stock.sentiment.news}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400">{stock.sentiment.news}</span>
                    </div>
                    
                    <div className="flex items-center text-xs">
                      <span className="w-16 text-slate-600 dark:text-slate-400">Analyst:</span>
                      <div className="w-full max-w-[100px] bg-slate-200 dark:bg-slate-600 rounded-full h-1.5 mr-2">
                        <div 
                          className={`${getSentimentBarColor(stock.sentiment.analyst)} h-1.5 rounded-full`} 
                          style={{ width: `${stock.sentiment.analyst}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-400">{stock.sentiment.analyst}</span>
                    </div>
                    
                    <div className="flex items-center text-xs font-medium">
                      <span className="w-16 text-slate-800 dark:text-slate-200">Overall:</span>
                      <div className="w-full max-w-[100px] bg-slate-200 dark:bg-slate-600 rounded-full h-2 mr-2">
                        <div 
                          className={`${getSentimentBarColor(stock.sentiment.overall)} h-2 rounded-full`} 
                          style={{ width: `${stock.sentiment.overall}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-800 dark:text-slate-200">{stock.sentiment.overall}</span>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Opening (9:30-10:00)</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSignalBadgeClass(stock.openingSignal)}`}>
                        {stock.openingSignal}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Closing (3:30-4:00)</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSignalBadgeClass(stock.closingSignal)}`}>
                        {stock.closingSignal}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-slate-700 border-l-4 border-yellow-500 dark:border-yellow-400">
        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
          <span className="font-bold">Note:</span> This is demonstration data only. Our live platform analyzes thousands of data points in real-time to generate accurate sentiment signals for the crucial opening and closing trading windows.
        </p>
      </div>
    </div>
  );
};

export default SentimentDemo; 