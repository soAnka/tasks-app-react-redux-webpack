
export const setUserChoice = (state=null, action) => {
    switch(action.type) {
        case 'setUserChoice':
            return action.option
        default:
            return state

    }
}