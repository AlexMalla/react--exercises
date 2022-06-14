import react from 'react';

class ClickCounter extends react.Component {

    state = {
        name: ""
    }

    handlerCounterIncrement = (event) => {
        console.log(event)
        this.setState((state) => {
            return { name: event.target.innerText }
        })

    }

    render() {
        return (
            <div>
                <h1> Last button: {this.state.name}</h1>
                <button onClick={this.handlerCounterIncrement}>First</button>
                <button onClick={this.handlerCounterIncrement}>Second</button>
                <button onClick={this.handlerCounterIncrement}>Third</button>

            </div>
        )
    }
}

export default ClickCounter