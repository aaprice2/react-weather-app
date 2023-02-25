import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      date: "Saturday 10:00 AM",
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h2>{weatherData.city}</h2>
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-3 weather-info">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
          </div>
          <div className="col-3">
            <img src={weatherData.iconUrl} alt=""></img>
          </div>
        </div>
        <div className="row current-conditions">
          <div className="col-4">
            <p>Humidity: {weatherData.humidity}%</p>
          </div>
          <div className="col-4">
            <p>Wind: {Math.round(weatherData.wind)} km/h</p>
          </div>
          <div className="col-4">
            <p>Feels Like: {Math.round(weatherData.feelsLike)}° C</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8b6dc570eaf7977950b59213d0d0ca0b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
