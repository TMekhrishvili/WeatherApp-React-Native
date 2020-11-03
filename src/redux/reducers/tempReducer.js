const TempReducer = (state = [], action) => {
    switch (action.type) {
        case 'CLEAR_TEMPERATURES':
            return []
        case 'FETCH_TEMPERATURE':            
            return state.concat(action.data)
        default:
            return state
    }
}

export default TempReducer