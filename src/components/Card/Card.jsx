import { useState, useRef, useEffect } from "react";
import "./Card.css";
import dayjs from "dayjs";

const Card = ({ weather }) => {
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef(null);
  const date = dayjs(weather.datetime);
  const day = date.format("dddd");
  const weatherImg = `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`;

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsSelected(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="card-title">
        <h3>{day}</h3>
      </div>
      <div className="card-img">
        <img src={weatherImg} alt="" />
      </div>
      <div className="maxminheat-wrapper">
        <p className="max-heat">{weather.app_max_temp}°C</p>
        <p className="min-heat">{weather.app_min_temp}°C</p>
      </div>
    </div>
  );
};

export default Card;
