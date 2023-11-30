import React from 'react';
import "./WeatherCard.css";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;



  return (
    <div class="weather-card">
      <h2>{weatherData.name}</h2>
      <img src={iconUrl} alt={weatherData.weather[0].description} />
      <p>Temperature: {Math.round(weatherData.main.temp - 273.15)} °C</p>
      <p>Max Temperature: {Math.round(weatherData.main.temp_max- 273.15)} °C</p>
      <p>Min Temperature: {Math.round(weatherData.main.temp_min- 273.15)} °C</p>
      <p>{weatherData.weather[0].main}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      {/* <p>{weatherData.weather[0].id}</p> */}
      <p>Clouds: {weatherData.clouds.all}</p>
      {/* Additional weather details */}
      <p>Wind: {weatherData.wind.speed} km/h</p>
      
    </div>
  );
};

export default WeatherCard;