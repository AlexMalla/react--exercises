import React from "react";

class Container extends React.Component {
    render() {
        const containerStyle = {
            backgroundColor: 'white',
            border: '3px solid red'
        }

        return (
        <div style = {containerStyle} >
            <div>{this.props.title}</div>
            <div>{this.props.children}</div>
        </div>)
    }
}

export default Container