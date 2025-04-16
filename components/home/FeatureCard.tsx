"use client";

import { useRouter } from 'next/navigation';
import { 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon,
  NewspaperIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  GlobeAmericasIcon,
  BuildingLibraryIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  ctaText: string;
  ctaLink: string;
}

const FeatureCard = ({ title, description, icon, ctaText, ctaLink }: FeatureCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (ctaLink.includes('factors') || ctaLink.includes('sentiment')) {
      alert(`${ctaText} feature coming soon!`);
    } else {
      router.push(ctaLink);
    }
  };

  const getIcon = () => {
    switch (icon) {
      case 'ChartBarIcon':
        return <ChartBarIcon className="h-8 w-8 text-primary-600" />;
      case 'ChatBubbleBottomCenterTextIcon':
        return <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-primary-600" />;
      case 'NewspaperIcon':
        return <NewspaperIcon className="h-8 w-8 text-primary-600" />;
      case 'CurrencyDollarIcon':
        return <CurrencyDollarIcon className="h-8 w-8 text-primary-600" />;
      case 'UsersIcon':
        return <UsersIcon className="h-8 w-8 text-primary-600" />;
      case 'ClockIcon':
        return <ClockIcon className="h-8 w-8 text-primary-600" />;
      case 'ArrowTrendingUpIcon':
        return <ArrowTrendingUpIcon className="h-8 w-8 text-primary-600" />;
      case 'GlobeAmericasIcon':
        return <GlobeAmericasIcon className="h-8 w-8 text-primary-600" />;
      case 'BuildingLibraryIcon':
        return <BuildingLibraryIcon className="h-8 w-8 text-primary-600" />;
      case 'UserGroupIcon':
        return <UserGroupIcon className="h-8 w-8 text-primary-600" />;
      default:
        return <ChartBarIcon className="h-8 w-8 text-primary-600" />;
    }
  };

  return (
    <div className="card p-6 transition-all hover:shadow-lg bg-white dark:bg-slate-800 rounded-xl shadow">
      <div className="mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{description}</p>
      <button 
        onClick={handleClick}
        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center bg-transparent border-none cursor-pointer p-0"
      >
        {ctaText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default FeatureCard; 