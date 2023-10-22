import Card from "../Card/Card";
import "./CardWrapper.css";
import { v4 as uuidv4 } from "uuid";

const CardWrapper = ({ weatherData }) => {
  console.log(weatherData.responseData);
  console.log(weatherData.cityName);
  const firstSevenWeatherData = weatherData.responseData.slice(0, 7);
  return (
    <>
      <h1 className="city-name">{weatherData.cityName}</h1>

      <div className="card-wrapper">
        {firstSevenWeatherData.map((weather) => (
          <Card key={uuidv4()} weather={weather} />
        ))}
      </div>
    </>
  );
};

export default CardWrapper;
