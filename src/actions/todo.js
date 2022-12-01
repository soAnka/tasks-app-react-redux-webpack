const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
  }

  export const addTodo = ({text, id, completed}) => {
    return {
        type: 'todos/addTodo',
        payload: {
             id, text, completed
        }
    }
  }

  export const removeTodo = (removeId) => {
    return {
        type: 'todos/removeTodo',
        removeId
    }
  }