export default function todosReducer(state = {}, action) {
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

      case 'todos/toggleFavTodo':
        return {
          ...state,
          [action.favTodo.id]: {
            ...state[action.favTodo.id],
            isFavorite: action.favTodo.favStatus
            }
        }
        default:
      return state
  }
}