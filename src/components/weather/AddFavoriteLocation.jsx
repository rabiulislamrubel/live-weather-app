import { useContext, useState } from "react";
import heartRed from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddFavoriteLocation() {
  const [toggle, setToggle] = useState(false);

  const { favorites, addFavoriteLocation, removeFavoriteLocation } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  const found = favorites.find((fav) => fav.location === location);
  const drive = found || toggle;

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addFavoriteLocation(latitude, longitude, location);
    } else {
      removeFavoriteLocation(location);
    }
    setToggle(!found);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={drive ? heartRed : heart} alt="heart" />
        </button>
      </div>
    </div>
  );
}
