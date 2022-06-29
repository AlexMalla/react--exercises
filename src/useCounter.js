import { useState } from 'react'

function useCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue);

    function onIncrement() {
        setCounter(c => c + 1)
    }

    function onDecrement() {
        setCounter(c => c - 1)
    }

    function onReset() {
        setCounter(initialValue)
    }
    return { onIncrement, onDecrement, onReset, counter }

}

export default useCounter