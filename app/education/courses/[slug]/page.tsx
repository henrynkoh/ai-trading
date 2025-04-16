"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CourseDetail } from '@/types';

export default function CoursePage() {
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  useEffect(() => {
    async function fetchCourseDetail() {
      try {
        setLoading(true);
        setError(null);
        
        if (!slug) {
          throw new Error('Invalid course slug');
        }

        const response = await fetch(`/api/education/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            router.push('/404');
            return;
          }
          throw new Error(`Failed to fetch course details: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Validate the data structure
        if (!data || typeof data !== 'object' || !data.title) {
          throw new Error('Invalid course data format');
        }
        
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setError(error instanceof Error ? error.message : 'Failed to load course');
        
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

    if (slug) {
      fetchCourseDetail();
    }
  }, [slug, router, retryCount]);

  const handleRetry = () => {
    setRetryCount(prevCount => prevCount + 1);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center flex-col p-6">
          <div className="text-center py-10 bg-red-50 dark:bg-red-900/20 rounded-xl p-8 max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Error Loading Course</h1>
            <p className="mb-6 text-red-600 dark:text-red-400">{error}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button 
                onClick={handleRetry}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Try Again
              </button>
              <Link 
                href="/education" 
                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-md transition-colors"
              >
                Back to Courses
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center flex-col p-6">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="mb-6">Sorry, the course you're looking for could not be found.</p>
          <Link 
            href="/education" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Back to Courses
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const { 
    title, 
    image, 
    level, 
    duration, 
    modules, 
    description, 
    content, 
    instructor 
  } = course;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 px-6 md:px-12 bg-primary-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <Link 
              href="/education" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Courses
            </Link>
            
            <div className="rounded-xl overflow-hidden mb-8">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder-course.jpg';
                  (e.target as HTMLImageElement).alt = 'Course image not available';
                }}
              />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
                {title}
              </h1>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm font-medium">
                  {level}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {duration} | {modules} modules
                </span>
              </div>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              {description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                <div className="prose prose-primary dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Instructor
                </h3>
                
                <div className="flex items-start">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-16 h-16 rounded-full mr-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder-instructor.jpg';
                      (e.target as HTMLImageElement).alt = 'Instructor image not available';
                    }}
                  />
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">
                      {instructor.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Enroll Now
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                  Gain access to this course and all educational materials.
                </p>
                <button 
                  onClick={() => alert('Enrollment feature coming soon!')}
                  className="w-full justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center"
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-100 dark:bg-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-900 dark:text-primary-100">
              Ready to Start?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Join our community of traders mastering the critical 30-minute windows of market trading.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => alert('Sign up feature coming soon!')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Sign Up Now
              </button>
              <Link 
                href="/education" 
                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-md transition-colors"
              >
                Explore More Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 