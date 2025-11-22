import React, { useState } from "react";
import LocationForm from "./components/LocationForm";
import WeatherDisplay from "./components/WeatherDisplay";
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather Forecast Application</h1>
      <LocationForm setWeather={setWeather} />
      <WeatherDisplay data={weather} />
    </div>
  );
}

export default App;
