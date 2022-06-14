import React from "react";

class CounterClick extends React.Component {
state = {
    counter: this.props.initialValue
}

handleCounterIncrement = () => {
    this.setState((state) => {
        return {
            counter: state.counter + this.props.incrementBy
        }
    })

}

render() {
    return (
        <div>
            <h2>Counter: {this.state.counter}</h2>
            <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
    )
}

}

CounterClick.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
}

export default CounterClick