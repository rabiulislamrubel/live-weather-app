import PropTypes from "prop-types";
import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addFavoriteLocation = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };

  const removeFavoriteLocation = (location) => {
    const filterLocation = favorites.filter((fav) => fav.location !== location);

    setFavorites(filterLocation);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavoriteLocation, removeFavoriteLocation }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

FavoriteProvider.propTypes = {
  children: PropTypes.node,
};

export default FavoriteProvider;
