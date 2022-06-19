import React from "react";
class Login extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox : false,
        login: true
    }
    HandleSubmit = (event) => {
        const name = event.target.name
        const value = event.target.value
        const checkbox= event.target.checked
        const type = event.target.type
        this.setState({
            [name]: type === 'checkbox'
             ? checkbox
             : value
        })
    }
        onLogin = (event) => {
            console.log(this.state)

        }

        reset = () => {
            this.setState(
                {
                    username: "",
                    password: "",
                    checkbox: false
                }
            )
        }

    render() {
        return <form>
            <input type="text" name="username" value={this.state.username} onChange={this.HandleSubmit} placeholder="Username" required />
            <input type="password" name="password" value={this.state.password} onChange={this.HandleSubmit} placeholder="Password" required />
            <input type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.HandleSubmit} />
            <span>remember me</span>
            <button type="submit"
                    onClick={this.onLogin}
                    disabled={(this.state.password === "" || this.state.username === ""
                    ? true
                    : false)}>
                        Login
                        </button>

                    <button onClick={this.reset}>
                        Reset
                    </button>
             </form>
    }
}
export default Login