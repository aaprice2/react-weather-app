import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8b6dc570eaf7977950b59213d0d0ca0b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }
  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function cityInput(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={cityInput} />
      <button type="button">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div>{form}</div>
        <ul className="SearchEngine">
          <li> Temperature:{Math.round(temperature)}°F</li>
          <li> Description: {description}</li>
          <li> Humidity: {humidity}%</li>
          <li> Wind: {Math.round(wind)} mph</li>
          <li>
            {" "}
            <img src={icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
