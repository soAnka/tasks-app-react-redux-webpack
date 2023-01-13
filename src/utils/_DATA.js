let todos = {
  "bj352vodupe1dqz9emx13l":{ 
    id: "bj352vodupe1dqz9emx13l", 
    text: 'Learn React', 
    completed: false, 
    hardness: 2, 
    isFavorite:'not', 
    date:'1-12-2022' 
  },
  "cj352vodupe1dqz9emx13l":{ 
    id: "cj352vodupe1dqz9emx13l", 
    text: 'Learn React', 
    completed: false, 
    hardness: 2, 
    isFavorite:'not', 
    date:'1-12-2022' 
  }
}

let goals = {
  "gd352vodupe1dqz9emx13l":{ 
    id: "gd352vodupe1dqz9emx13l", 
    text: 'Read 100 books', 
    completed: false, 
    hardness: 2, 
    isFavorite:'not', 
    date:'1-12-2022' 
  },
  "dj352vodupe1dqz9emx13l":{ 
    id: "dj352vodupe1dqz9emx13l", 
    text: 'Travel around the world', 
    completed: false, 
    hardness: 2, 
    isFavorite:'not', 
    date:'1-12-2022' 
  }
}

let userChoice = {
  option: ''
}

// export const getTodos = () => {
//   return new Promise ((res, rej)=> {
//     setTimeout(()=>res({...todos}),1000)
//   })
// }

export function getUserOption() {
  return new Promise ((res, rej)=> {
    setTimeout(()=>res({...userChoice}),1000)
  })
}


export function getTodos() {
  return new Promise ((res, rej)=> {
    setTimeout(()=>res({...todos}),1000)
  })
}

export function getGoals() {
  return new Promise ((res, rej)=> {
    setTimeout(()=>res({...goals}),1000)
  })
}


const generateTodoId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const start = new Date(Date.now()).toLocaleDateString()

export const formatNewTodo = ({text, value}) => {
    return {
        id: generateTodoId(),
        text,
        completed: false,
        date: start,
        hardness: value,
        isFavorite: false
    }
}

