export const addTodo = (todo) => {
  return {
    type: "todos/addTodo",
    todo,
  };
};

export const removeTodo = (removeId) => {
  return {
    type: "todos/removeTodo",
    removeId,
  };
};

export const toggleTodo = (todo) => {
  return {
    type: "todos/toggleTodo",
    todo,
  };
};

export const receiveTodos = (todos) => {
  return {
    type: "todos/receiveTodos",
    todos,
  };
};

export const toggleFavTodo = (favTodo) => {
  return {
    type: "todos/toggleFavTodo",
    favTodo,
  };
};
