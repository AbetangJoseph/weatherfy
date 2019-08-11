import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/weather';

const initialState = {
  city: '',
  country: '',
  icons: '',
  mainTemperature: '',
  maxTemperature: '',
  minTemperature: '',
  weatherDescription: ''
};
function App() {
  const [weather, setWeather] = useState(initialState);

  useEffect(() => {
    // call to openweathermap API.
    const getWeather = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${
          process.env.REACT_APP_WEATHER_API_KEY
        }`
      );
      const response = await res.json();
      console.log(response);

      // set the weather state to the values from API response
      setWeather(() => {
        return {
          city: response.name,
          country: response.sys.country,
          icons: response.weather[0].main,
          mainTemperature: KelvinToCelsius(response.main.temp),
          maxTemperature: KelvinToCelsius(response.main.temp_max),
          minTemperature: KelvinToCelsius(response.main.temp_min),
          weatherDescription: response.weather[0].description
        };
      });
    };

    getWeather();
  }, []);

  // Converts temperature in Kelvin to Degree Celsius
  const KelvinToCelsius = K => {
    const Celsius = Math.floor(K - 273.15);
    return Celsius;
  };

  // destructure properties from state.
  const {
    city,
    country,
    mainTemperature,
    maxTemperature,
    minTemperature,
    weatherDescription
  } = weather;

  return (
    <div className="App">
      <Weather
        city={city}
        country={country}
        mainTemp={mainTemperature}
        maxTemp={maxTemperature}
        minTemp={minTemperature}
        description={weatherDescription}
      />
    </div>
  );
}

export default App;
