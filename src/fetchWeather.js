import axios from 'axios';

const API_KEY = '39eaf928cc1a161ae72da391c542587f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const fetchWeather = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`;
  return axios.get(url).then(response => response.data);
};

export default fetchWeather;