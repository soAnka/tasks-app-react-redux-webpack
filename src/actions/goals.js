export const addGoal = ({id,text,completed}) => {
    return {
        type: 'goals/addGoal',
        payload: {
             id, text, completed
        }
    }
  }

  export const removeGoal = removeId => {
    return {
        type: 'goals/removeGoal',
        removeId
    }
  }

  export const toggleGoal = id => {
    return {
        type: 'goals/toggleGoal',
        id
    }
  }

  