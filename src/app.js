import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import App from "./components/App";
import { Provider } from "react-redux";
import { theme } from "./layouts/Theme";
import { ThemeProvider } from "@mui/material/styles";

const store = configureStore();

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App store={store} theme={theme} />
    </ThemeProvider>
  </Provider>
);
