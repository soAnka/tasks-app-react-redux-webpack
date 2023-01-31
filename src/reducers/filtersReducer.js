export default function filtersReducer(state = 'all', action) {
    switch (action.type) {
        case 'setFilter':
            return state=action.filter
            default:
                return state
    }
}