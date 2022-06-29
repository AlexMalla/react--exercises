import { useState } from "react";

function UseForm() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function Input(event) {
        event.target.name === "username"
            ? setUsername(event.target.value)
            : setPassword(event.target.value)
    }

    function TellMeInput(event) {
        event.preventDefault()
        console.log(`Username: ${username}`)
        console.log(`Password: ${password}`)

    }
    return { username, password, TellMeInput, Input }
}

export default UseForm;