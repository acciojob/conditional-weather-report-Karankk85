import React from "react";

const WeatherDisplay = ({ weather }) => {
  const temperatureStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        <span style={temperatureStyle}>{weather.temperature}°C</span>
      </p>
      <p>{weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
