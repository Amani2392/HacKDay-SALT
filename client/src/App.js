import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import CityInfo from "./components/CityInfo.js";
import "../src/css/App.css";
const App = () => {
  const [query, setQuery] = useState("stockholm");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetch(`http://localhost:3000/forecasts/${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div className="App">
      <h1 className="weather-app"> 🌦 Weather App </h1>
      {!data ? (
        "Loading..."
      ) : (
        <div className="container">
          <div className="weather-container">
            <Form query={query} setQuery={setQuery} />
            <CityInfo data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
