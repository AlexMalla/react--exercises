import React from "react";
import Age from "./Age";

export function Welcome({ name, age }) {
    return (
        <div>
            <h2>Welcome {name} </h2>
            <Age age={age} />
        </div>
    )
}

export default Welcome