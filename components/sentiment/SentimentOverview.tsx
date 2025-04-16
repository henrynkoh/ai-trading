const SentimentOverview = () => {
  const sentimentSources = [
    {
      name: 'Social Media',
      description: 'Twitter, Reddit (WallStreetBets), StockTwits',
      indicators: ['Mention volume', 'Sentiment ratio', 'Trending symbols'],
      importance: 85,
    },
    {
      name: 'News Sources',
      description: 'Financial news, press releases, blogs',
      indicators: ['Headline sentiment', 'Coverage volume', 'Tone analysis'],
      importance: 80,
    },
    {
      name: 'Market Indicators',
      description: 'Pre-market activity, futures, options',
      indicators: ['Volume patterns', 'Put/call ratio', 'Order imbalances'],
      importance: 90,
    },
    {
      name: 'Analyst Activity',
      description: 'Upgrades, downgrades, commentary',
      indicators: ['Rating changes', 'Price targets', 'Analyst language'],
      importance: 75,
    },
    {
      name: 'Institutional Moves',
      description: 'Dark pool activity, block trades',
      indicators: ['Large order flow', 'Off-exchange volume', 'Unusual activity'],
      importance: 70,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-12 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-200">
        How Our AI Analyzes Sentiment
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-700">
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Sentiment Source</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Data Description</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Key Indicators</th>
              <th className="p-3 text-left text-slate-800 dark:text-slate-200">Impact Level</th>
            </tr>
          </thead>
          <tbody>
            {sentimentSources.map((source, index) => (
              <tr 
                key={index} 
                className="border-b border-slate-200 dark:border-slate-700"
              >
                <td className="p-3 font-medium text-slate-800 dark:text-slate-200">{source.name}</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">{source.description}</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">
                  <ul className="list-disc pl-5">
                    {source.indicators.map((indicator, i) => (
                      <li key={i}>{indicator}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-3">
                  <div className="flex items-center">
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-primary-600 h-2.5 rounded-full" 
                        style={{ width: `${source.importance}%` }}
                      ></div>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{source.importance}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 p-4 bg-primary-50 dark:bg-slate-700 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-primary-800 dark:text-primary-200">
          How We Process Sentiment Data
        </h3>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
          <li>Collect real-time data from all sentiment sources</li>
          <li>Apply Natural Language Processing to categorize sentiment</li>
          <li>Weight sentiment based on source reliability and market conditions</li>
          <li>Detect anomalies and unusual sentiment shifts</li>
          <li>Generate actionable signals specifically for the first and last 30 minutes</li>
        </ol>
      </div>
    </div>
  );
};

export default SentimentOverview; 