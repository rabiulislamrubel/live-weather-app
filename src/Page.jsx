import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import clearSkyBG from "./assets/backgrounds/clear-sky.jpg";
import fewCloudBG from "./assets/backgrounds/few-clouds.jpg";
import mistBG from "./assets/backgrounds/mist.jpeg";
import rainDayBG from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsBG from "./assets/backgrounds/scattered-clouds.jpg";
import snowBG from "./assets/backgrounds/snow.jpg";
import sunnyBG from "./assets/backgrounds/sunny.jpg";
import thunderBG from "./assets/backgrounds/thunderstorm.jpg";
import winterBG from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, status } = useContext(WeatherContext);

  const [backgroundImg, setBackgroundImg] = useState("");

  function getBGImage(climateSituation) {
    switch (climateSituation) {
      case "Rain":
        return rainDayBG;
      case "Clouds":
        return scatteredCloudsBG;
      case "Clear":
        return sunnyBG;
      case "Snow":
        return snowBG;
      case "Fog":
        return winterBG;
      case "Thunder":
        return thunderBG;
      case "Haze":
        return fewCloudBG;
      case "Mist":
        return mistBG;
      default:
        return clearSkyBG;
    }
  }

  useEffect(() => {
    const imageBG = getBGImage(weatherData.climate);
    setBackgroundImg(imageBG);
  }, [weatherData.climate]);

  return (
    <>
      {status.state == "loading" ? (
        <div>
          <p>{status.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${backgroundImg})` }}
          className="h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main className="h-[calc(100%-8.5rem)] flex items-center">
            <WeatherBoard />
          </main>
        </div>
      )}
    </>
  );
}
