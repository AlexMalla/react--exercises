import React from "react";

class Counter extends React.Component {
    state = {
      counter: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return { counter: this.state.counter + 1 };
            })
        }, 1000)
    }


    render() {
        return (<h1> Counter: {this.state.counter} </h1>)
    }
}


    export default Counter