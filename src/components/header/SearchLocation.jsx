import { useContext } from "react";
import search from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { useDebounce } from "../../hooks/useDebounce";
import { getLocationByName } from "../../locations/locations-data";

export default function SearchLocation() {
  const { setSelectedLocation } = useContext(LocationContext);

  const debounce = useDebounce((text) => {
    const searchLocation = getLocationByName(text);
    setSelectedLocation({ ...searchLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    debounce(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img src={search} />
        </button>
      </div>
    </form>
  );
}
