
import React from 'react';
import type { CurrentWeather as CurrentWeatherType } from '../types';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherProps {
  data: CurrentWeatherType;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="bg-white/10 p-6 rounded-2xl flex flex-col items-center text-center h-full">
      <h2 className="text-2xl font-bold">{data.city}, {data.country}</h2>
      <p className="text-gray-300 mb-4">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      
      <div className="my-6">
        <WeatherIcon condition={data.condition} className="w-24 h-24 text-yellow-300" />
      </div>

      <p className="text-6xl font-extrabold mb-2">{data.temperature}°C</p>
      <p className="text-xl font-semibold text-blue-300 mb-6">{data.conditionText}</p>
      
      <div className="w-full mt-auto space-y-3 text-left">
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-300">Feels like</span>
          <span className="font-bold">{data.feelsLike}°C</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-300">Humidity</span>
          <span className="font-bold">{data.humidity}%</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-300">Wind</span>
          <span className="font-bold">{data.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
