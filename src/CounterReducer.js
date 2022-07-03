const initialState = 0;

const INCREMENT = "COUNTER@INCREMENT"
const DECREMENT = "COUNTER@DECREMENT"
const RESET = "COUNTER@RESET"

export function counterIncrement() {
    return {
        type: INCREMENT
    }
}

export function counterDecrement() {
    return {
        type: DECREMENT
    }
}

export function counterReset() {
    return {
        type: RESET
    }
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: return state + 1
        case DECREMENT: return state - 1
        case RESET: return initialState
        default: return state
    }
}


export default counterReducer