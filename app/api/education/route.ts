import { NextResponse } from 'next/server';
import { Course } from '@/types';

export async function GET() {
  // Simulating fetching courses from a database
  const courses: Course[] = [
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
      period: 'opening'
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
      period: 'closing'
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
      period: 'both'
    }
  ];

  return NextResponse.json(courses);
} 