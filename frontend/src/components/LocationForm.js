import React, { useState } from "react";
import { getForecast, addLocation } from "../services/api";

function LocationForm({ setWeather }) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await getForecast(location, date);
    setWeather(response.data);

    await addLocation({
      name: location,
      latitude: response.data.lat|| 0.51 ,
      longitude: response.data.lon|| 0.26,
      altitude: 0.04
    });
  };


  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Get Forecast</button>
    </form>
  );
}

export default LocationForm;
