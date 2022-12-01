const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }

  console.log(initialState)
  
  // Use the initialState as a default value
  export default function todosReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'todos/addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'todos/removeTodo':
                return {
                    ...state,
                    todos: state.todos.filter((t)=>t.id!==action.removeId)
                }
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }