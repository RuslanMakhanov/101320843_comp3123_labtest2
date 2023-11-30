import React, { useState } from 'react';
import fetchWeather from './fetchWeather';
import WeatherCard from './components/WeatherCard';



const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = async (e) => {
    const city = e.target.value;
    if (city) {
      const data = await fetchWeather(city);
      setWeatherData(data);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto'  }}>
      <select defaultValue="" onChange={handleCityChange}>
        <option value="" disabled>Select your city</option>
        <option value="Toronto">Toronto</option>
        <option value="Montreal">Montreal</option>
        <option value="Ottawa">Ottawa</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Calgary">Calgary</option>
        <option value="Edmonton">Edmonton</option>
      </select>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
