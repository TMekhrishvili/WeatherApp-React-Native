export const fetchTemperature = data => {
    return {
        type: 'FETCH_TEMPERATURE',
        data: data,
    }
}

export const clearState = () => {
    return {
        type: 'CLEAR_STATE'
    }
}