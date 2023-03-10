import React from "react";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import App from "./components/App";
import { Provider } from "react-redux";
import { theme } from "./layouts/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";

const store = configureStore();

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App store={store} theme={theme} />
    </ThemeProvider>
  </Provider>
);
