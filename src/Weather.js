import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h2>New York</h2>
          <ul>
            <li>Saturday 10:00 AM</li>
            <li>Partly Cloudy</li>
          </ul>
        </div>
        <div className="col-3 weather-info">
          <span className="temperature">4</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Party Cloudy"
          ></img>
        </div>
      </div>
      <div className="row current-conditions">
        <div className="col-4">
          <p>Humidity: 20%</p>
        </div>
        <div className="col-4">
          <p>Wind: 10 km/h</p>
        </div>
        <div className="col-4">
          <p>Feels Like: -3° C</p>
        </div>
      </div>
    </div>
  );
}
