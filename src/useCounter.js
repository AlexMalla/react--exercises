import { useState, useCallback } from 'react'

function useCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue);

    const onIncrement = useCallback(() => {
        setCounter(c => c + 1)
    }, [])

    const onDecrement = useCallback(() => {
        setCounter(c => c - 1)
    }, [])



    function onReset() {
        setCounter(initialValue)
    }
    return { onIncrement, onDecrement, onReset, counter }

}

export default useCounter 