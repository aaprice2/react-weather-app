import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-3 weather-info">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-3 weather-info">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
      </div>
      <div className="row current-conditions">
        <div className="col-4">
          <p>Humidity: {props.data.humidity}%</p>
        </div>
        <div className="col-4">
          <p>Wind: {Math.round(props.data.wind)} km/h</p>
        </div>
        <div className="col-4">
          <p>Feels Like: {Math.round(props.data.feelsLike)}° C</p>
        </div>
      </div>
    </div>
  );
}
