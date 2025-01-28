import { useContext } from "react";
import pin from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/utils-date";

import blankIcon from "../../assets/blank.png";
import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import rainIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";

export default function WeatherTemperature() {
  const { weatherData } = useContext(WeatherContext);
  const { location, climate, temperature, time } = weatherData;

  const getClimateIcon = (climateSituation) => {
    switch (climateSituation) {
      case "Rain":
        return rainIcon;
      case "Clouds":
        return cloudIcon;
      case "Clear":
        return sunnyIcon;
      case "Snow":
        return snowIcon;
      case "Fog":
        return hazeIcon;
      case "Thunder":
        return thunderIcon;
      case "Haze":
        return hazeIcon;
      case "Mist":
        return hazeIcon;
      default:
        return blankIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getClimateIcon(climate)} alt="icon" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {temperature}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
