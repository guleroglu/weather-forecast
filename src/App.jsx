import { useState } from "react";
import "./App.css";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import SearchCity from "./components/SearchCity/SearchCity";
import axios from "axios";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    responseData: [],
    cityName: "",
  });

  const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=TR,NC&key=1058979bc8b94fffa9edb652c6e572c2`;
  const fetchWeatherData = (e) => {
    e.preventDefault();

    if (city) {
      axios
        .get(apiUrl)
        .then((response) => {
          setWeatherData({
            responseData: response.data.data,
            cityName: response.data.city_name,
          });
          setCity("");
        })
        .catch((error) => {
          console.error("Hava durumu verisi alınamadı: ", error);
          setCity("");
        });
    }
  };

  return (
    <div className="container">
      <h1 className="weather-forecast-title">7 DAY WEATHER FORECAST</h1>
      <SearchCity
        setCity={setCity}
        fetchWeatherData={fetchWeatherData}
        city={city}
      />
      <CardWrapper weatherData={weatherData} />
    </div>
  );
}

export default App;
