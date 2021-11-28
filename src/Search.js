import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=471a6be89778a7f92e1728b2754d799c&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setWeather(response.data);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleCity} />
        <input type="submit" value="Search" />
      </form>
      <Weather weather={weather} />
    </div>
  );
}
