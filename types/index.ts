// Factor related types
export type Factor = {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  importance: number;
  openingImpact: number;
  closingImpact: number;
};

export type FactorDetail = Factor & {
  fullDescription: string;
  relatedFactors: string[];
  examples: {
    stock: string;
    date: string;
    description: string;
  }[];
};

// Sentiment related types
export type SentimentData = {
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

// Education related types
export type Course = {
  id: number;
  slug?: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  image: string;
  link: string;
  tags?: string[];
  period?: 'opening' | 'closing' | 'both';
};

export type CourseDetail = Course & {
  content: string;
  instructor: {
    name: string;
    bio: string;
    image: string;
  };
}; 