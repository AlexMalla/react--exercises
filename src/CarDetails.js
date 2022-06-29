import { useRef } from "react"

function CarDetails({ initialData }) {

    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    function inputOnFocus(event) {
        event.target.value = ""
    }

    return (
        <div>
            <h1>Car details:</h1>
            <form>
                <div>
                    <label htmlFor="model">Model</label>
                    <input
                        name="model"
                        type="text"
                        defaultValue={initialData.model}
                        ref={modelRef}
                        onFocus={inputOnFocus} />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        name="year"
                        type="number"
                        defaultValue={initialData.year}
                        ref={yearRef}
                        onFocus={inputOnFocus} />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        name="color"
                        type="text"
                        defaultValue={initialData.color}
                        ref={colorRef}
                        onFocus={inputOnFocus} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarDetails