import React from "react";

import "./Weather.css";

export default function Weather(props) {
  console.log(props.weather);

  if (props.weather) {
    return (
      <div className="Weather">
        <ul>
          <li>Temperature: {Math.round(props.weather.main.temp)}°C</li>
          <li>Description: {props.weather.weather[0].description}</li>
          <li>Humidity: {props.weather.main.humidity}%</li>
          <li>Wind: {Math.round(props.weather.wind.speed)}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
