import React from 'react'
import SearchBar from './components/SearchBar'
import { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

const fetchWeather = async (cityName) => {
  try{
    const API_KEY = import.meta.env.VITE_API_KEY;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric', 
        },
      }
    );

    if(res.status == 200){
      setWeather(res.data);
    }
  }
  catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

  return (
    <div>
      <SearchBar setCity={setCity} fetchWeather={fetchWeather} /> 
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App