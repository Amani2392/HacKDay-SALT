import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const [data, setData] = useState(null);
  // city, setcity

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
      <Form setQuery={setQuery} />
      <h1>{!data ? "Loading..." : data.name}</h1>
      <ul>
        <li>
          Last updated: <span></span>
        </li>
        <li>{!data ? "getting weatherinfo" : data.weather[0].description}</li>
      </ul>

      <div>
        <span>
          {" "}
          {!data ? "getting weatherinfo" : Math.round(data.main.temp)}°C
        </span>
      </div>

      <ul>
        <li>
          Humidity: <span></span>
          {!data ? "getting weatherinfo" : Math.round(data.main.humidity)}%
        </li>
        <li>
          Wind: <span></span>
          {!data ? "getting weatherinfo" : Math.round(data.wind.speed)}m/h
        </li>
      </ul>
    </div>
  );
}

export default App;
