import React from "react";
import useCounter from "./useCounter";

function Counter() {
    const { onIncrement, onDecrement, onReset, counter } = useCounter()
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Counter 