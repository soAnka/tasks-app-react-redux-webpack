import React from 'react';
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import App from './components/App';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, pink, cyan, lightBlue, brown } from '@mui/material/colors';

const store = configureStore()

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[600]
    },
    secondary: {
      main: lightBlue[600]
    },
    favColor: {
      main: pink[500]
    },
    completedTaskColor: {
      main: cyan[200],
      contrastText: "rgba(0,0,0,0.8)"
    },
    uncompletedTaskColor: {
      main: brown[800],
      contrastText: "rgba(255,255,255,1)"
    },

  }
});

console.log(store.getState())

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App store={store} theme={theme} />
    </ThemeProvider>
  </Provider>
);
