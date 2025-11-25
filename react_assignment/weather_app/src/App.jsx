import { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    } catch (err) {
      setError('City not found or API error');
      setWeather(null);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="weather-info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            <p className="description">{weather.weather[0].description}</p>
          </div>
          <div className="weather-details">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
