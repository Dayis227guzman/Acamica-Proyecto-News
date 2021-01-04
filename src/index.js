import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./store";
import App from "./components/App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

const store = storeFactory();

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
