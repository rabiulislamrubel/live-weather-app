const data = [
    { location: "New Delhi", latitude: 28.6139, longitude: 77.2090 },
    { location: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
    { location: "Colombo", latitude: 6.9271, longitude: 79.8612 },
    { location: "Kathmandu", latitude: 27.7172, longitude: 85.3240 },
    { location: "Thimphu", latitude: 27.4712, longitude: 89.6339 },
    { location: "Malé", latitude: 4.1755, longitude: 73.5093 },
    { location: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
    { location: "Abu Dhabi", latitude: 24.4539, longitude: 54.3773 },
    { location: "Baghdad", latitude: 33.3152, longitude: 44.3661 },
    { location: "Tehran", latitude: 35.6892, longitude: 51.3890 },
    { location: "Jerusalem", latitude: 31.7683, longitude: 35.2137 },
    { location: "Amman", latitude: 31.9539, longitude: 35.9106 },
    { location: "Beirut", latitude: 33.8938, longitude: 35.5018 },
    { location: "Ankara", latitude: 39.9334, longitude: 32.8597 },
    { location: "Damascus", latitude: 33.5138, longitude: 36.2765 },
    { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
    { location: "Berlin", latitude: 52.5200, longitude: 13.4050 },
    { location: "Rome", latitude: 41.9028, longitude: 12.4964 },
    { location: "London", latitude: 51.5074, longitude: -0.1278 },
    { location: "Madrid", latitude: 40.4168, longitude: -3.7038 },
    { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
    { location: "Stockholm", latitude: 59.3293, longitude: 18.0686 },
    { location: "Oslo", latitude: 59.9139, longitude: 10.7522 },
    { location: "Amsterdam", latitude: 52.3676, longitude: 4.9041 },
    { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
    { location: "Washington, D.C.", latitude: 38.9072, longitude: -77.0369 },
    { location: "Ottawa", latitude: 45.4215, longitude: -75.6972 },
    { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
    { location: "Havana", latitude: 23.1136, longitude: -82.3666 },
    { location: "Kingston", latitude: 17.9712, longitude: -76.7920 },
    { location: "Guatemala City", latitude: 14.6349, longitude: -90.5069 },
    { location: "Panama City", latitude: 8.9833, longitude: -79.5197 },
];

function getLocationsData() {
    return data;
}

function getLocationByName(location) {
    if (!location) return;

    const filtered = data.filter((item) => item.location.toLocaleLowerCase() === location.toLocaleLowerCase());

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaltValue = {
            location: "",
            latitude: 0,
            longitude: 0
        };
        return defaltValue;
    }
}

export { getLocationByName, getLocationsData };

