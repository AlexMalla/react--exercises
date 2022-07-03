import { createStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer";
import { todoReducer } from "./todosReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})

export const store = createStore(rootReducer)