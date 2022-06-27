import { useEffect } from "react";
import { useState } from "react";

function ClickCounter({ initialValue = 0, onCounterChange }) {

    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        onCounterChange(count)
    }, [count])

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )

}

export default ClickCounter;