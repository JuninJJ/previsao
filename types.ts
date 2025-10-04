
export type WeatherCondition = 'Sunny' | 'PartlyCloudy' | 'Cloudy' | 'Rain' | 'Thunderstorm' | 'Snow' | 'Mist';

export interface CurrentWeather {
  city: string;
  country: string;
  temperature: number;
  condition: WeatherCondition;
  conditionText: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

export interface ForecastDay {
  date: string;
  day: string;
  maxTemp: number;
  minTemp: number;
  condition: WeatherCondition;
  conditionText: string;
}

export interface WeatherData {
  current: CurrentWeather;
  forecast: ForecastDay[];
}
