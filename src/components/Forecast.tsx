
import React from 'react';
import type { ForecastDay } from '../types';
import WeatherIcon from './WeatherIcon';

interface ForecastProps {
  data: ForecastDay[];
}

const ForecastCard: React.FC<{ day: ForecastDay }> = ({ day }) => (
  <div className="bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
    <p className="font-bold text-lg">{day.day}</p>
    <WeatherIcon condition={day.condition} className="w-12 h-12 text-gray-300 my-1" />
    <div className="flex gap-2 font-semibold">
      <span className="text-white">{day.maxTemp}°</span>
      <span className="text-gray-400">{day.minTemp}°</span>
    </div>
  </div>
);

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <div className="bg-white/10 p-6 rounded-2xl h-full">
      <h3 className="text-xl font-bold mb-4 text-center md:text-left">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {data.map((day) => (
          <ForecastCard key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
