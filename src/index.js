import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import App from './chapter1Less9/App';
//import App from './chapter1Less11/App';
//import App from "./chapter2Less2/App";
//import App from "./chapter2Less8/App";
//import App from "./chapter3Less5/App";
//import App from "./chapter4Less3/App";
//import App from "./chapter5Less1/App";
//import App from "./chapter6Less1/App";
import App from "./chapter6Less5/App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
