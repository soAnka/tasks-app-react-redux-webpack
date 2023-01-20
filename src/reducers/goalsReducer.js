const initialState = {
  goals: [
    { id: 0, text: 'Learn React Goal', completed: true },
    { id: 1, text: 'Learn Redux Goal', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun goal!', completed: false, color: 'blue' }
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

export default function goalsReducer(state = {}, action) {
  switch (action.type) {
    case 'goals/receiveGoals':
      return {
        ...state,
        ...action.goals
      }
    case 'goals/addGoal':
      return {
        ...state,
        [action.goal.id]: action.goal
      }
    case 'goals/removeGoal':
      return Object.keys(state).filter((k) => k !== action.removeId).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {})
    case 'goals/toggleGoal':
      return {
        ...state,
        [action.goal.id]: {
          ...state[action.goal.id],
          completed: action.goal.val
        }
      }

    default:
      return state
  }
}