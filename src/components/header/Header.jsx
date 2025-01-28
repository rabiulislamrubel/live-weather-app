import FavoriteLocations from "./FavoriteLocations";
import FavoriteModal from "./FavoriteModal";
import SearchLocation from "./SearchLocation";
import WeatherLogo from "./WeatherLogo";

import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="relative w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <WeatherLogo />

        <div className="flex items-center gap-4 relative">
          <SearchLocation />
          <FavoriteLocations onShow={() => setShowModal(!showModal)} />
          {showModal && <FavoriteModal />}
        </div>
      </nav>
    </header>
  );
}
