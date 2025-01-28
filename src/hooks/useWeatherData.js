import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

export const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperatue: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        latitude: "",
        longitude: "",
    });

    const [status, setStatus] = useState({
        state: "",
        message: ""
    });

    const { selectedLocation } = useContext(LocationContext);

    useEffect(() => {
        let ignore = false;

        const fetchWeatherData = async (latitude, longitude) => {
            try {
                setStatus((st) => {
                    const draft = {
                        ...st,
                        state: "loading",
                        message: "Weather data is loading..."
                    }
                    return draft;
                });

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);

                if (!response.ok) {
                    const errorMessage = `Fetching weather data failed: ${response.status}`;
                    throw new Error(errorMessage);
                }

                const data = await response.json();


                if (!ignore) {
                    setWeatherData(wd => {
                        const draftData = {
                            ...wd,
                            location: data?.name,
                            climate: data?.weather[0]?.main,
                            temperature: data?.main?.temp,
                            maxTemperature: data?.main?.temp_max,
                            minTemperatue: data?.main?.temp_min,
                            humidity: data?.main?.humidity,
                            cloudPercentage: data?.clouds?.all,
                            wind: data?.wind?.speed,
                            time: data?.dt,
                            latitude: data?.coord?.lat,
                            longitude: data?.coord?.lon
                        };
                        return draftData;
                    })
                }

            } catch (err) {
                setStatus((st) => {
                    const draft = {
                        ...st,
                        state: "error",
                        message: "Weather data is failed to fetch..."
                    }
                    return draft;
                });
                throw new Error(err.message);

            } finally {
                setStatus((st) => {
                    const draft = {
                        ...st,
                        state: "",
                        message: ""
                    }
                    return draft;
                });
            }

        }

        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            })
        }

        return () => {
            ignore = true;
        }

    }, [selectedLocation.latitude, selectedLocation.longitude]);


    return {
        weatherData, status
    }
}


