import type { WeatherData } from '../types';

// Predefined weather data for specific cities to showcase animations
const cityWeatherData: { [key: string]: WeatherData } = {
  lisbon: {
    current: {
      city: 'Lisbon',
      country: 'Portugal',
      temperature: 28,
      condition: 'Sunny',
      conditionText: 'Clear sky',
      humidity: 55,
      windSpeed: 12,
      feelsLike: 29,
    },
    forecast: [
        { date: '2024-08-01', day: 'Thu', maxTemp: 30, minTemp: 20, condition: 'Sunny', conditionText: 'Clear' },
        { date: '2024-08-02', day: 'Fri', maxTemp: 29, minTemp: 21, condition: 'Sunny', conditionText: 'Clear' },
        { date: '2024-08-03', day: 'Sat', maxTemp: 31, minTemp: 22, condition: 'PartlyCloudy', conditionText: 'Partly Cloudy' },
        { date: '2024-08-04', day: 'Sun', maxTemp: 28, minTemp: 20, condition: 'Sunny', conditionText: 'Clear' },
        { date: '2024-08-05', day: 'Mon', maxTemp: 29, minTemp: 21, condition: 'PartlyCloudy', conditionText: 'Few Clouds' },
    ],
  },
  london: {
    current: {
      city: 'London',
      country: 'UK',
      temperature: 17,
      condition: 'Rain',
      conditionText: 'Light Rain',
      humidity: 85,
      windSpeed: 20,
      feelsLike: 16,
    },
    forecast: [
        { date: '2024-08-01', day: 'Thu', maxTemp: 19, minTemp: 14, condition: 'Rain', conditionText: 'Rain' },
        { date: '2024-08-02', day: 'Fri', maxTemp: 18, minTemp: 13, condition: 'Cloudy', conditionText: 'Cloudy' },
        { date: '2024-08-03', day: 'Sat', maxTemp: 20, minTemp: 15, condition: 'Rain', conditionText: 'Showers' },
        { date: '2024-08-04', day: 'Sun', maxTemp: 17, minTemp: 12, condition: 'Rain', conditionText: 'Heavy Rain' },
        { date: '2024-08-05', day: 'Mon', maxTemp: 19, minTemp: 14, condition: 'PartlyCloudy', conditionText: 'Few Clouds' },
    ],
  },
  tokyo: {
    current: {
      city: 'Tokyo',
      country: 'Japan',
      temperature: 22,
      condition: 'Cloudy',
      conditionText: 'Overcast',
      humidity: 70,
      windSpeed: 10,
      feelsLike: 23,
    },
    forecast: [
        { date: '2024-08-01', day: 'Thu', maxTemp: 25, minTemp: 18, condition: 'Cloudy', conditionText: 'Cloudy' },
        { date: '2024-08-02', day: 'Fri', maxTemp: 24, minTemp: 19, condition: 'Mist', conditionText: 'Mist' },
        { date: '2024-08-03', day: 'Sat', maxTemp: 26, minTemp: 20, condition: 'PartlyCloudy', conditionText: 'Partly Cloudy' },
        { date: '2024-08-04', day: 'Sun', maxTemp: 23, minTemp: 18, condition: 'Cloudy', conditionText: 'Cloudy' },
        { date: '2024-08-05', day: 'Mon', maxTemp: 25, minTemp: 19, condition: 'Mist', conditionText: 'Fog' },
    ],
  },
  oslo: {
    current: {
      city: 'Oslo',
      country: 'Norway',
      temperature: -2,
      condition: 'Snow',
      conditionText: 'Light Snow',
      humidity: 92,
      windSpeed: 8,
      feelsLike: -5,
    },
    forecast: [
        { date: '2024-08-01', day: 'Thu', maxTemp: 0, minTemp: -4, condition: 'Snow', conditionText: 'Snowing' },
        { date: '2024-08-02', day: 'Fri', maxTemp: 1, minTemp: -5, condition: 'Snow', conditionText: 'Heavy Snow' },
        { date: '2024-08-03', day: 'Sat', maxTemp: -1, minTemp: -6, condition: 'Cloudy', conditionText: 'Cloudy' },
        { date: '2024-08-04', day: 'Sun', maxTemp: 0, minTemp: -3, condition: 'Snow', conditionText: 'Light Snow' },
        { date: '2024-08-05', day: 'Mon', maxTemp: 2, minTemp: -2, condition: 'PartlyCloudy', conditionText: 'Few Clouds' },
    ],
  }
};


// This function simulates an API call.
// It now returns predefined data for specific cities to showcase different weather animations.
export const getMockWeather = (city: string): Promise<WeatherData> => {
  console.log(`Fetching weather for ${city}... (mock)`);
  
  const normalizedCity = city.toLowerCase();
  // Default to Lisbon's data if the city is not found
  const dataToReturn = cityWeatherData[normalizedCity] || cityWeatherData['lisbon'];

  return new Promise((resolve) => {
    setTimeout(() => {
      // Create a deep copy to avoid direct mutation of mock data if the app were to modify it
      resolve(JSON.parse(JSON.stringify(dataToReturn)));
    }, 500); // Simulate network delay
  });
};
