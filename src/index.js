import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import SearchBar from "./components/searchbar";

ReactDOM.render(
  <React.StrictMode>
    <SearchBar />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
