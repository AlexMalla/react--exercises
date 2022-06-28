import { useState, useEffect } from "react";

function Counter({ initialValue = 0 }) {

    const [count, setCount] = useState(initialValue)
    const interval = () => setInterval(() => {
        setCount(count + 1)
    }, 1000)

    useEffect(() => {
        interval()
    }, [count])

    useEffect(() => {

        return () => {
            clearInterval(interval)
            console.log('Unmount')
        }
    }, [])



    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    )


}


export default Counter 