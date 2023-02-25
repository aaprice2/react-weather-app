import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="New York" />
      </div>
      <footer>
        <p>
          This project was coded by Alexis Andrukat-Price and is{" "}
          <a
            href="https://github.com/aaprice2/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>{" "}
          and <a href="/">hosted on Netlify.</a>
        </p>
      </footer>
    </div>
  );
}
