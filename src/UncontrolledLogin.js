import React, {createRef} from "react";

class UncontrolledLogin extends React.Component {

    _formRef = createRef()

handleFormSubmit = (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    const remember = event.target.elements.remember.value

    console.log({
        username,
        password,
        remember
    })
}

render() {
    return (
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
            <input name="username" placeholder="Username" autoFocus />
            <input name="password" type="password" placeholder="Password" />
            <input name="remember" type="checkbox" />
            <span>Remember me</span>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}

}
export default UncontrolledLogin