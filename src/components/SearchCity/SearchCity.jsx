import Button from "../Button/Button";
import "./SearchCity.css";
const SearchCity = ({ setCity, fetchWeatherData, city }) => {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <form className="input-wrapper" onSubmit={fetchWeatherData}>
      <input
        type="text"
        className="city-input"
        placeholder="Enter City..."
        onChange={handleCityChange}
        value={city}
      />
      <Button />
    </form>
  );
};

export default SearchCity;
