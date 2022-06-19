import React from "react";

class UncontrolledLogin extends React.Component {

    state = {
        username: '',
        password: '',
        checkbox : false,
        login: true
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    
      handleSubmit(event) {
        alert("Submitted name: " + this.input.current.value);
      }
    
      reset = (event) => {
        this.setState(
            {
                username: "",
                password: "",
                checkbox: false,
                login: true
            }
        )
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <input type="text" ref={this.input} required placeholder="Username" />
              <input type="password" ref={this.input} required placeholder="Password" />
              <input type="checkbox" name="checkbox" value={this.input} />
            <span>remember me</span>
            <input type="submit" value="Login" />
            <button onClick={this.reset}>
                        Reset
                    </button>
          </form>
        );
      }
}

export default UncontrolledLogin