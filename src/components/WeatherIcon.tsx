
import React from 'react';
import type { WeatherCondition } from '../types';

interface WeatherIconProps {
  condition: WeatherCondition;
  className?: string;
}

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const CloudSunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
    <path d="M18 10h-1.26a8 8 0 1 0-11.48 9.4"></path>
  </svg>
);

const CloudRainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M8 19v1"></path>
    <path d="M8 14v1"></path>
    <path d="M16 19v1"></path>
    <path d="M16 14v1"></path>
    <path d="M12 21v1"></path>
    <path d="M12 16v1"></path>
  </svg>
);

const CloudLightningIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
    <path d="m13 12-3 5h4l-3 5"></path>
  </svg>
);

const SnowflakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="2" x2="12" y2="22"></line>
        <line x1="17" y1="5" x2="7" y2="19"></line>
        <line x1="7" y1="5" x2="17" y2="19"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="5" y1="17" x2="19" y2="7"></line>
        <line x1="5" y1="7" x2="19" y2="17"></line>
    </svg>
);

const MistIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"></path>
    <path d="M2 17h20"></path>
    <path d="M3 7h18"></path>
  </svg>
);


const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = 'w-6 h-6' }) => {
  switch (condition) {
    case 'Sunny':
      return <SunIcon className={className} />;
    case 'PartlyCloudy':
      return <CloudSunIcon className={className} />;
    case 'Cloudy':
      return <CloudIcon className={className} />;
    case 'Rain':
      return <CloudRainIcon className={className} />;
    case 'Thunderstorm':
      return <CloudLightningIcon className={className} />;
    case 'Snow':
        return <SnowflakeIcon className={className} />;
    case 'Mist':
        return <MistIcon className={className} />;
    default:
      return <CloudIcon className={className} />;
  }
};

export default WeatherIcon;
