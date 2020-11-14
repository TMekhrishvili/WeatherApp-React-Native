const HistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'CLEAR_HISTORY':
            return []
        case 'SET_HISTORY':
            return state.concat(...action.data)
        default:
            return state
    }
}

export default HistoryReducer