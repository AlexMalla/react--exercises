import UseForm from "./UseForm";

function Form() {
    const { username, password, TellMeInput, Input } = UseForm()

    return (
        <div>
            <form>
                <input type='text' name='username' onChange={Input} value={username} placeholder="Username"></input>
                <input type='password' name='password' onChange={Input} value={password} placeholder="Password"></input>
                <button onClick={TellMeInput} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Form;