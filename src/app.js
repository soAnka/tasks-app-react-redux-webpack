import React from 'react';
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import { applyMiddleware } from 'redux';
import logger from './middleware/logger';
import App from './components/app';
import { addGoal, removeGoal, toggleGoal } from './actions/goals';
import { addTodo, removeTodo } from './actions/todo';
import { Provider } from 'react-redux';

console.log("working")

var comp = <p>Lorem ipsum</p>
var rootApp = document.getElementById('app');

const store = configureStore()
// console.log(store.getState())
// store.dispatch(addTodo({id:4, text:'Buy a milk', completed: true}))
// console.log(store.getState())

// store.dispatch(removeTodo(0))
// console.log(store.getState())

// store.dispatch(removeGoal(0));
// console.log(store.getState())

// store.dispatch(addGoal({id:5, text:'Lorem'}))
// console.log(store.getState())

// store.dispatch(toggleGoal(1))
// console.log(store.getState())




// ReactDOM.render(comp, rootApp)
const root = ReactDOM.createRoot(rootApp)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)