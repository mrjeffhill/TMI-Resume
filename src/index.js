import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import { AppDataProvider } from "./components/appdata";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function main(target, container) {
  ReactDOM.render(target, container);
}

main(
  <AppDataProvider>
    <App />
  </AppDataProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
