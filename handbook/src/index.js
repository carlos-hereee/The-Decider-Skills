import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HandbookState } from "./utlis/Context";
import App from "./App";
import "./stylesheets/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HandbookState>
        <App />
      </HandbookState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
