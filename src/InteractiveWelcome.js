import React from "react";
import Welcome from "./Welcome";


class InteractiveWelcome extends React.Component {
    state = {
        name: ""
    }

    eventInputChange = (event) => {
        this.setState((state) => {
            return { name: state.name = event.target.value }
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.eventInputChange} />
                <Welcome name={this.state.name} />
            </div>)
    }
}




export default InteractiveWelcome 