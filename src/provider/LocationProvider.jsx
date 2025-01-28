import { LocationContext } from "../context";

import { useState } from "react";

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
