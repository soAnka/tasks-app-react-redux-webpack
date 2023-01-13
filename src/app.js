import React from 'react';
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import App from './components/App';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Menu from './components/Menu';
import { CssBaseline } from '@mui/material';
import AddTodo from './components/Home';
import TodosList from './components/TodosList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, pink, deepPurple, amber, green, deepOrange, cyan, lightBlue, brown } from '@mui/material/colors';
import MenuNav from './components/MenuNav';
import { toggleTodo } from './actions/todo';

const store = configureStore()
// console.log(store.getState())

// store.dispatch(toggleTodo({id:0, completed:true}))
// console.log(store.getState())

// ReactDOM.render(comp, rootApp)

const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuNav />,
      children: [
        {
            path: "/",
            element: <App />,
        },

        {
            path: "/add",
            element: <AddTodo />,
        },
        {
            path: "/todos",
            element: <TodosList />,
        },
    
      ]
    },
  ]);

  const theme = createTheme({
    palette: {
      primary: {
        main: indigo[600]
      },
      secondary: {
        // main: pink[600],
        // main: amber[900],
        // main: deepPurple['A700']
        main: green['A200'],
        main: lightBlue[600]
        // main: cyan[600]
        // main: deepOrange[600]
        // main: green[600]
      },
      success: {
        main: cyan[200]
      },
      warning: {
        // main: deepOrange['A700'],
        main: brown[800]
      }
    }
  });

  // const store = createStore(appReducer, appMiddleware)
  console.log(store.getState())


  ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    {/* <RouterProvider router={router} /> */}
    <App store={store} theme={theme} />
    </ThemeProvider>
  </Provider>
  );
