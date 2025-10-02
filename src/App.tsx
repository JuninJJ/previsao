import React, { useState, useEffect, useCallback } from 'react';
import type { WeatherData, WeatherCondition } from './types';
import { getMockWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('Lisbon');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (searchCity: string) => {
    if (!searchCity) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getMockWeather(searchCity);
      setWeatherData(data);
    } catch {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const rainLayer = document.getElementById('bg-rain');
    if (rainLayer && rainLayer.children.length === 0) {
      for (let i = 0; i < 120; i++) {
        const d = document.createElement('div');
        d.className = 'drop';
        d.style.left = Math.random() * 100 + '%';
        d.style.animationDuration = 0.5 + Math.random() * 0.8 + 's';
        d.style.animationDelay = -Math.random() * 2 + 's';
        rainLayer.appendChild(d);
      }
    }

    const cloudLayer = document.getElementById('bg-cloudy');
    if (cloudLayer && cloudLayer.children.length === 0) {
      for (let i = 0; i < 6; i++) {
        const c = document.createElement('div');
        c.className = 'cloud';
        c.style.width = 200 + Math.random() * 200 + 'px';
        c.style.height = 100 + Math.random() * 100 + 'px';
        c.style.top = 10 + Math.random() * 40 + '%';
        c.style.left = -200 - Math.random() * 200 + 'px';
        c.style.animationDuration = 40 + Math.random() * 40 + 's';
        cloudLayer.appendChild(c);
      }
    }

    const snowLayer = document.getElementById('bg-snow');
    if (snowLayer && snowLayer.children.length === 0) {
      const snowflakeSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full">
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <line x1="17" y1="5" x2="7" y2="19"></line>
          <line x1="7" y1="5" x2="17" y2="19"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="5" y1="17" x2="19" y2="7"></line>
          <line x1="5" y1="7" x2="19" y2="17"></line>
        </svg>
      `;
      for (let i = 0; i < 80; i++) {
        const f = document.createElement('div');
        f.className = 'snowflake';
        const size = 8 + Math.random() * 12;
        f.style.width = `${size}px`;
        f.style.height = `${size}px`;
        f.style.left = `${Math.random() * 100}%`;
        f.style.animationDuration = `${8 + Math.random() * 10}s`;
        f.style.animationDelay = `-${Math.random() * 10}s`;
        f.style.opacity = `${0.5 + Math.random() * 0.5}`;
        f.innerHTML = snowflakeSVG;
        snowLayer.appendChild(f);
      }
    }
  }, []);

  const getWeatherBackgroundMode = (condition?: WeatherCondition): string | null => {
    if (!condition) return null;
    switch (condition) {
      case 'Sunny':
        return 'sunny';
      case 'PartlyCloudy':
      case 'Cloudy':
      case 'Mist':
        return 'cloudy';
      case 'Rain':
      case 'Thunderstorm':
        return 'rain';
      case 'Snow':
        return 'snow';
      default:
        return null;
    }
  };

  useEffect(() => {
    const layers = {
      sunny: document.getElementById('bg-sunny'),
      rain: document.getElementById('bg-rain'),
      cloudy: document.getElementById('bg-cloudy'),
      snow: document.getElementById('bg-snow'),
    };
    const mode = getWeatherBackgroundMode(weatherData?.current?.condition);
    Object.values(layers).forEach(l => l && l.classList.remove('active'));
    if (mode && layers[mode]) layers[mode]!.classList.add('active');
  }, [weatherData]);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-2">
            Weather Forecast
          </h1>
          <SearchBar onSearch={handleSearch} />
        </header>
        <main>
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="text-center text-red-400 bg-red-900/30 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          ) : weatherData ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <CurrentWeather data={weatherData.current} />
              </div>
              <div className="md:col-span-2">
                <Forecast data={weatherData.forecast} />
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 p-4">
              <p>Enter a city to get the weather forecast.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
