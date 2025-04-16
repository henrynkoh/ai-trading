"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Course } from '@/types';

export default function EducationPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/education');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.status} ${response.statusText}`);
        } 
        
        const data = await response.json();
        
        // Validate that the data is an array and has at least one course
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format: expected an array of courses');
        }
        
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError(error instanceof Error ? error.message : 'Failed to load courses');
        
        // If we haven't exceeded max retries, try again after a delay
        if (retryCount < MAX_RETRIES) {
          const timer = setTimeout(() => {
            setRetryCount(prevCount => prevCount + 1);
          }, 3000); // Retry after 3 seconds
          
          return () => clearTimeout(timer);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, [retryCount]);

  const handleRetry = () => {
    setRetryCount(prevCount => prevCount + 1);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 px-6 md:px-12 bg-primary-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900 dark:text-primary-100">
              Educational Resources
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Learn how to effectively trade during the crucial opening and closing 30 minutes
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-200">
              Featured Courses
            </h2>
            
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-10 bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
                <p className="text-lg text-red-600 dark:text-red-400 mb-4">{error}</p>
                <button 
                  onClick={handleRetry}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : courses.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg text-slate-600 dark:text-slate-400">No courses available at the moment. Please check back later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <Link href={`/education/courses/${course.slug}`} key={course.id} className="group">
                    <div className="card h-full transition-all group-hover:shadow-lg overflow-hidden flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder-course.jpg';
                            (e.target as HTMLImageElement).alt = 'Image not available';
                          }}
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <span className="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded text-xs font-medium">
                            {course.level}
                          </span>
                          <div className="text-slate-500 dark:text-slate-400 text-xs">
                            {course.duration} | {course.modules} modules
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                          {course.description}
                        </p>
                        <div className="text-primary-600 dark:text-primary-400 font-medium text-sm flex justify-between items-center">
                          <span>View Course</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-200">
              Learning Paths
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-primary-200 dark:border-primary-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
                  Opening 30 Minutes Specialist
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Focus on mastering the strategies for profiting from the first 30 minutes of market trading.
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300 mb-6">
                  <li>Trading the Opening 30 Minutes</li>
                  <li>Understanding Market Sentiment</li>
                  <li>Technical Analysis for 30-Minute Trading</li>
                  <li>Risk Management for Volatile Periods</li>
                </ol>
                <button onClick={() => alert('Opening 30 Minutes Specialist path coming soon!')} className="btn-primary inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Start This Path
                </button>
              </div>
              
              <div className="border border-primary-200 dark:border-primary-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300">
                  Closing Bell Master
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Specialize in the unique opportunities presented in the final 30 minutes of the trading day.
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300 mb-6">
                  <li>Closing Bell Strategies</li>
                  <li>The Psychology of Open/Close Trading</li>
                  <li>Technical Analysis for 30-Minute Trading</li>
                  <li>Risk Management for Volatile Periods</li>
                </ol>
                <button onClick={() => alert('Closing Bell Master path coming soon!')} className="btn-primary inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Start This Path
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button onClick={() => alert('More resources coming soon!')} className="btn-primary bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Browse All Resources
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 