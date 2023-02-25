import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import App from "./App";
import "./App.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="SearchEngine">
      <App />
    </div>
  </StrictMode>
);
