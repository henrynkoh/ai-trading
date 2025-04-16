import { NextResponse } from 'next/server';
import { CourseDetail } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  // Simulating fetching course details from a database
  const courseDetails: CourseDetail[] = [
    {
      id: 1,
      slug: 'trading-the-opening-30-minutes',
      title: 'Trading the Opening 30 Minutes',
      description: 'Learn strategies specifically designed for the crucial first 30 minutes of market open.',
      level: 'Intermediate',
      duration: '4 weeks',
      modules: 8,
      image: '/images/courses/opening-30.jpg',
      link: '/education/courses/trading-the-opening-30-minutes',
      tags: ['Opening Bell', 'Day Trading', 'Market Open'],
      period: 'opening',
      content: `
        <h2>Course Overview</h2>
        <p>The first 30 minutes of the trading day (9:30-10:00 AM ET) is one of the most volatile and opportunity-rich periods in the market. This course teaches you how to analyze pre-market conditions, identify opening patterns, and execute strategic trades during this critical window.</p>
        
        <h2>What You'll Learn</h2>
        <ul>
          <li>How to analyze pre-market indicators to predict opening moves</li>
          <li>The five most common opening patterns and how to trade them</li>
          <li>Risk management techniques specific to morning volatility</li>
          <li>How to use level 2 data during the first 30 minutes</li>
          <li>Setting up your trading workstation for efficient morning trading</li>
        </ul>
        
        <h2>Course Modules</h2>
        <ol>
          <li>Understanding the Opening Auction</li>
          <li>Pre-Market Analysis and Preparation</li>
          <li>Opening Range Breakout Strategies</li>
          <li>Volume Analysis in the First 30 Minutes</li>
          <li>Practical Trade Examples and Case Studies</li>
          <li>Building Your Morning Trading Plan</li>
          <li>Risk Management for Opening Volatility</li>
          <li>Advanced Opening Strategies</li>
        </ol>
      `,
      instructor: {
        name: 'Sarah Johnson',
        bio: 'Professional day trader with 12 years of experience specializing in opening range strategies',
        image: '/images/instructors/sarah-johnson.jpg'
      }
    },
    {
      id: 2,
      slug: 'closing-bell-strategies',
      title: 'Closing Bell Strategies',
      description: 'Master techniques to capitalize on market movements during the final hour of trading.',
      level: 'Advanced',
      duration: '3 weeks',
      modules: 6,
      image: '/images/courses/closing-bell.jpg',
      link: '/education/courses/closing-bell-strategies',
      tags: ['Closing Bell', 'Day Trading', 'Market Close'],
      period: 'closing',
      content: `
        <h2>Course Overview</h2>
        <p>The closing 30 minutes of the trading day (3:30-4:00 PM ET) offers unique opportunities as traders close positions and institutions execute end-of-day orders. This course provides strategies specifically designed for the closing auction and final trading minutes.</p>
        
        <h2>What You'll Learn</h2>
        <ul>
          <li>How to interpret closing imbalances and MOC (Market On Close) orders</li>
          <li>Identifying end-of-day momentum patterns</li>
          <li>Strategies for trading into strength or weakness at close</li>
          <li>Managing overnight risk when holding positions</li>
          <li>Techniques for closing out day positions effectively</li>
        </ul>
        
        <h2>Course Modules</h2>
        <ol>
          <li>The Mechanics of the Closing Auction</li>
          <li>Analyzing Closing Order Imbalances</li>
          <li>Institutional Activity in the Final 30 Minutes</li>
          <li>End-of-Day Momentum Strategies</li>
          <li>Risk Management for Overnight Positions</li>
          <li>Case Studies and Trade Examples</li>
        </ol>
      `,
      instructor: {
        name: 'Michael Chen',
        bio: 'Former institutional trader specialized in market-on-close orders and closing auction strategies',
        image: '/images/instructors/michael-chen.jpg'
      }
    },
    {
      id: 3,
      slug: 'understanding-market-sentiment',
      title: 'Understanding Market Sentiment',
      description: 'Learn how to interpret and utilize social media, news, and analyst sentiment in your trading decisions.',
      level: 'Beginner',
      duration: '2 weeks',
      modules: 5,
      image: '/images/courses/sentiment.jpg',
      link: '/education/courses/understanding-market-sentiment',
      tags: ['Sentiment Analysis', 'Social Media', 'News Trading'],
      period: 'both',
      content: `
        <h2>Course Overview</h2>
        <p>Investor sentiment is a powerful driver of price action, particularly during the volatile opening and closing periods. This course teaches you how to measure, interpret, and trade based on market sentiment using both traditional and AI-powered tools.</p>
        
        <h2>What You'll Learn</h2>
        <ul>
          <li>How to track social media sentiment in real-time using AI tools</li>
          <li>Using news sentiment analysis for trading decisions</li>
          <li>Interpreting options market sentiment indicators</li>
          <li>How sentiment shifts during market open and close</li>
          <li>Creating a sentiment-based trading dashboard</li>
        </ul>
        
        <h2>Course Modules</h2>
        <ol>
          <li>Fundamentals of Market Sentiment</li>
          <li>Traditional Sentiment Indicators</li>
          <li>Social Media Sentiment Analysis</li>
          <li>News Analytics and Natural Language Processing</li>
          <li>Trading Strategies Based on Sentiment Shifts</li>
        </ol>
      `,
      instructor: {
        name: 'Alex Rodriguez',
        bio: 'Data scientist and trader specializing in sentiment analysis and natural language processing',
        image: '/images/instructors/alex-rodriguez.jpg'
      }
    }
  ];

  const course = courseDetails.find(course => course.slug === slug);

  if (!course) {
    return new NextResponse(JSON.stringify({ error: 'Course not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return NextResponse.json(course);
} 