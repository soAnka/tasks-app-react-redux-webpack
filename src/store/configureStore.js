import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from '../middleware/logger'
import goalsReducer from '../reducers/goalsReducer'
import todosReducer from '../reducers/todosReducer'
// import { combineReducers } from 'redux'

const appMiddleware = applyMiddleware(logger)


const appReducer = combineReducers({
    todos: todosReducer,
    goals: goalsReducer
  })

  export default function configureStore(initialState) {
    const store = createStore(appReducer, initialState)
    return store;
}

