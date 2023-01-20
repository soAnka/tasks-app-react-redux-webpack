// const initialState = {
//   todos:[],
//     // todos: [
//     //   { id: 0, 
//     //     text: 'Learn React', 
//     //     completed: false, 
//     //     hardness: 2, 
//     //     isFavorite:'not', 
//     //     date:'1-12-2022' 
//     //   },
//     // ],
//     // filters: {
//     //   status: 'All',
//     //   colors: []
//     // }
//   }

// console.log(initialState)

// Use the initialState as a default value
export default function todosReducer(state = {}, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'todos/receiveTodos':
      return {
        ...state,
        ...action.todos
      }
    case 'todos/addTodo':
      return {
        ...state,
        [action.todo.id]: action.todo
      }
    case 'todos/removeTodo':
      return Object.keys(state).filter((k) => k !== action.removeId).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {})

    case 'todos/toggleTodo':
      return {
        ...state,
        [action.todo.id]: {
          ...state[action.todo.id],
          completed: action.todo.val
        }

      }

    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}