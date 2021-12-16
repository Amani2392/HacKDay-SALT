import React from "react";
import showTime from "../utils/time";

const CityInfo = ({ data }) => {
  return (
    <div className="row">
      <div className="col">
        <h2 className="city">{data.name}</h2>
        <h3 className="main"> {data.weather[0].main} </h3>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <span id="temperature">{Math.round(data.main.temp)}</span>
            <span className="unites">
              <a
                href=""
                className="celsius-link"
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
                {`${Math.round(data.main.temp_max)}°`}
              </span>
              <span className="low-temperature" id="low-temp-today">
                {`${Math.round(data.main.temp_min)}°`}
              </span>
            </small>
          </div>
        </div>
        <div className="col">
          <div className="description">{data.weather[0].description}</div>
          <div className="humidity">Humidity: {data.main.humidity}%</div>
          <div className="wind">Wind: {Math.round(data.wind.speed)} km/h</div>
        </div>
      </div>
      <hr />
      <h5 className="update-time">Updated Last: {showTime(data.dt * 1000)}</h5>
    </div>
  );
};

export default CityInfo;
