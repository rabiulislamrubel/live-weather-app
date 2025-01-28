import PropTypes from "prop-types";
import { WeatherContext } from "../context";
import { useWeatherData } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, status } = useWeatherData();
  return (
    <WeatherContext.Provider value={{ weatherData, status }}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node,
};

export default WeatherProvider;
