import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import "./styles/App.css"; 

const App = () => {
  // Hardcoded weather input
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
