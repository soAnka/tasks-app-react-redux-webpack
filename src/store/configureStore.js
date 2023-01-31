import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { logger } from '../middleware/logger'
import filtersReducer from '../reducers/filtersReducer'
import goalsReducer from '../reducers/goalsReducer'
import { setUserChoice } from '../reducers/setUserChoice'
import todosReducer from '../reducers/todosReducer'

const appMiddleware = applyMiddleware(thunk, logger)


const appReducer = combineReducers({
    todos: todosReducer,
    goals: goalsReducer,
    filterChoice: filtersReducer,
    userChoice: setUserChoice
  })

  export default function configureStore() {
    const store = createStore(appReducer, appMiddleware)
    return store;
}

