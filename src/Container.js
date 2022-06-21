import React from "react";

class Container extends React.Component {
    render() {
        const containerStyle = {
            backgroundColor: 'white',
            border: '3px solid red'
        }

        return (
        <div style = {containerStyle} >
            {this.props.children}
        </div>)
    }
}

export default Container