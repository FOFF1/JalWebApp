import React from "react";
import ReactDOM from "react-dom";
import AppOld from "./AppOld";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <AppOld /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
