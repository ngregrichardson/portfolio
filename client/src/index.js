import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./animate.min.css";
import "./wing.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
