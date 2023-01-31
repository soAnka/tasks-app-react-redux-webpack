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
    case 'goals/toggleFavGoal':
      return {
        ...state,
        [action.favGoal.id]: {
          ...state[action.favGoal.id],
          isFavorite: action.favGoal.favStatus
        }
      }

    default:
      return state
  }
}