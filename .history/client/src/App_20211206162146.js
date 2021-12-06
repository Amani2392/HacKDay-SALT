import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import showTime from './utils/time'

import "./App.css";

function App() {
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
      <h1 className='weather-app'> 🌦Weather App </h1>
      <div className="container">
        <div className="weather-container">
          <Form  query= { query} setQuery={setQuery} />
          <div className="row">
            <div className="col">
              <h2 id="city">{!data ? "Loading..." : data.name}</h2>
              <h3 id='main'> {!data ? "Loading..." : data.weather[0].main} </h3>   
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <span id="temperature">
                    {!data ? "Loading..." : Math.round(data.main.temp)}
                  </span>
                  <span className="unites">
                    <a
                      href=""
                      id="celsius-link"
                      className="active"
                      alt="celsius"
                    >
                      °C
                    </a>
                    |
                    <a href="#" id="fahrenheit-link" alt="celsius">
                      °F
                    </a>
                  </span>
                </div>
                <div>
                  <small>
                    <span className="high-temperature" id="high-temp-today">
                      {!data
                        ? "Loading..."
                        :`${Math.round(data.main.temp_max)}°`}
                    </span>
                    <span className="low-temperature" id="low-temp-today">
                      {!data
                        ? "Loading..."
                        : `${Math.round(data.main.temp_min)}°`}
                    </span>
                  </small>
                </div>
              </div>
              <div className="col">
              <div id="description">
           {!data ? "Loading..." : data.weather[0].description}
                  </div>
                <div id='humidity'>
                  Humidity:  {!data ? "Loading..." : data.main.humidity}%
                </div>
                <div id='wind'>
                  Wind:   {!data ? "Loading..." : Math.round(data.wind.speed)} km/h
                </div>
              </div>
            </div>
            <hr />
            <h5 id="update-time">
              Updated Last:  {!data ? "Loading..." : showTime(data.dt * 1000)}
            </h5>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
