export const fetchTemperature = data => {
    return {
        type: 'FETCH_TEMPERATURE',
        data: data,
    }
}

export const clearTemperatures = () => {
    return {
        type: 'CLEAR_TEMPERATURES'
    }
}