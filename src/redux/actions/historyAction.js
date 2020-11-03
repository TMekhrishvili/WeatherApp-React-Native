export const clearHistory = () => {
    return {
        type: 'CLEAR_HISTORY'
    }
}

export const setHistory = data => {
    return {
        type: 'SET_HISTORY',
        data: data,
    }
}
