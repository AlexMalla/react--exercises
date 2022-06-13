import React from "react";

class Counter extends React.Component {
    state = {
      counter: this.props.counter
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { counter: state.counter + this.props.number }
            })
        }, this.props.interval)
    }
    render() {
        return <h1>Counter: {this.state.counter}</h1>
    }
    }

    Counter.defaultProps = {
        interval: 1000,
        number: 1,
        counter: 1
    }

    export default Counter