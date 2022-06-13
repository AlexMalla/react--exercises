import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
    state = {
      counter: this.props.counter
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return { counter: state.counter + this.props.count }
            })
        }, this.props.interval)
    }
    render() {
        return <CounterDisplay counter={this.state.counter} />
    }
    }

    Counter.defaultProps = {
        interval: 1000,
        count: 1,
        counter: 1
    }

    export default Counter