const initialState = []

const ADD_TODO = "ADD@TODOS"
const REMOVE_TODO = "REMOVE@TODOS"
const EDIT_TODO = "EDIT@TODOS"

export function addTodo(
    user = {
        id: initialState.length, title: "", completed: false
    }) {
    return {
        type: ADD_TODO,
        payload: user
    }
}

export function removeTodo(id = initialState.length) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export function editTodo(
    id = initialState.length, data = {
        title: "", completed: false
    }) {
    return {
        type: EDIT_TODO,
        payload: { id: id, data }
    }
}


export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload]
        }
        case REMOVE_TODO: {
            return state.filter(user => user.id !== action.payload)
        }
        case EDIT_TODO: {
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return { ...user, ...action.payload.data }
                } else {
                    return user
                }
            })
        }
        default: { return state }
    }
} 