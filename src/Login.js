import { useState } from "react";

function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })
    function inputChange(event) {
        const { name, type, value, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin() {
        console.log(data)
    }

    return (
        <form>
            <input onChange={inputChange} name="username" value={data.username} />
            <input onChange={inputChange} name="password" value={data.password} type="password" />
            <input onChange={inputChange} name="remember" checked={data.remember} type="checkbox" />
            <button type="submit" onClick={onLogin}>Login</button>
        </form>
    )
}


export default Login