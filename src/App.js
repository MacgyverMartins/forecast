import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { API_KEY, API_URL } from "./settings";
import ForecastList from "./components/ForecastList";
import ForecastView from "./components/ForecastView";
import ListItem from "./components/ListItem";
import Fallback from "./components/Fallback";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [locations, setLocations] = useState([
    {
      country: "GB",
      lat: 51.5073219,
      lon: -0.1276474,
      name: "London",
      state: "England",
    },
    {
      name: "Orlando",
      state: "Florida",
      country: "US",
      lat: 28.5421109,
      lon: -81.3790304,
    },
    {
      country: "ES",
      lat: 41.3828939,
      lon: 2.1774322,
      name: "Barcelona",
      state: "Catalonia",
    },
  ]);

  useEffect(() => {
    if (!selectedLocation) return;
    const { lat, lon } = selectedLocation;

    fetch(
      `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        const { current, daily } = res;
        setForecast({ current, daily, name: selectedLocation.name });
      });
  }, [selectedLocation]);

  return (
    <div className="App">
      {!selectedLocation && !forecast && <Fallback />}
      {selectedLocation && !forecast && <p>Loading...</p>}
      {selectedLocation && forecast && (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <ForecastView
                  forecast={forecast.current}
                  name={forecast.name}
                />
              }
            />
            <Route
              path="/7days"
              element={
                <ForecastList
                  forecast={forecast.daily}
                  name={selectedLocation.name}
                />
              }
            />
          </Routes>
        </div>
      )}
      <div>
        {locations.map((item) => (
          <ListItem
            key={item.name}
            data={item}
            onClick={(data) => setSelectedLocation(data)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
