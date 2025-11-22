import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import '../App.css';


function WeatherDisplay({ data }) {
  if (!data) return null;

  const hourlyData = data.hourly_temperatures.map((t, i) => ({
    hour: `${i}:00`,
    temp: t,
  }));

  const pieData = Object.keys(data.condition_distribution).map((key) => ({
    name: key,
    value: data.condition_distribution[key],
  }));

  return (
    <div>
      <h2>Weather for {data.location}</h2>
      <p><strong>Temperature:</strong> {data.temperature}°C</p>
      <p><strong>Humidity:</strong> {data.humidity}%</p>
      <p><strong>Conditions:</strong> {data.conditions}</p>
      <p><strong>Wind Speed:</strong> {data.wind_speed} km/h</p>
      <p><strong>UV Index:</strong> {data.uv_index}</p>

      <h3>Hourly Temperature</h3>
      <LineChart width={400} height={250} data={hourlyData}>
        <Line type="monotone" dataKey="temp" stroke="#00f" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <h3>Weather Distribution</h3>
      <PieChart width={400} height={250}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx={200}
          cy={120}
          outerRadius={80}
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={["orange", "gray", "green"][index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default WeatherDisplay;
