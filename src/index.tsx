import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/globals.css";
import App from "./App";
import PlayerContext from "./contexts/player";

ReactDOM.render(
  <PlayerContext>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </PlayerContext>,
  document.getElementById("root")
);
