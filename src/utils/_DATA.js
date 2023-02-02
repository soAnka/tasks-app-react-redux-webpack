const start = new Date(Date.now()).toLocaleDateString()
let startNum = start.slice(0, 2)
let startDate = (parseInt(startNum) - 1).toString() + start.slice(2, start.length)

const generateStartDate = () => {
  const start = new Date(Date.now()).toLocaleDateString()
  let startNum = start.slice(0, 2)
  let startDate = (parseInt(startNum) - 2).toString() + start.slice(2, start.length)
  return startDate;
}

let filter = {
  visibilityFilter: 'ALL'
}

let todos = {
  "bj352vodupe1dqz9emx13l": {
    id: "bj352vodupe1dqz9emx13l",
    text: 'Learn React',
    completed: true,
    hardness: 2,
    isFavorite: true,
    date: generateStartDate()
  },
  "cj352vodupe1dqz9emx13l": {
    id: "cj352vodupe1dqz9emx13l",
    text: 'Read 100 books',
    completed: false,
    hardness: 4,
    isFavorite: false,
    date: generateStartDate()
  }
}

let goals = {
  "gd352vodupe1dqz9emx13l": {
    id: "gd352vodupe1dqz9emx13l",
    text: 'Read 100 books',
    completed: true,
    hardness: 2,
    isFavorite: true,
    date: generateStartDate()
  },
  "dj352vodupe1dqz9emx13l": {
    id: "dj352vodupe1dqz9emx13l",
    text: 'Travel around the world',
    completed: false,
    hardness: 2,
    isFavorite: false,
    date: generateStartDate()
  }
}

let userChoice = {
  option: ''
}


export function getUserOption() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...userChoice }), 1000)
  })
}


export function getTodos() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...todos }), 1000)
  })
}

export function getGoals() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...goals }), 1000)
  })
}


const generateTodoId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const formatNewTodo = ({ text, value }) => {
  return {
    id: generateTodoId(),
    text,
    completed: false,
    date: start,
    hardness: value,
    isFavorite: false
  }
}

