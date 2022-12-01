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
  
  export default function goalsReducer(state = initialState, action) {
    switch (action.type) {
        case 'goals/addGoal':
            return {
                ...state,
                goals: [...state.goals, action.payload]
            }
        case 'goals/removeGoal':
                return {
                    ...state,
                    goals: state.goals.filter((t)=>t.id!==action.removeId)
                }
        case 'goals/toggleGoal':
                return {
                    ...state,
                    goals: {
                        ...state.goals,
                        [action.id]: {
                            ...state.goals[action.id],
                            completed: true
                        }
                    }
                    }
                

      default:
        return state
    }
  }