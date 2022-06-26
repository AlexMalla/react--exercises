import React from "react";

class DisplayLanguage extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}

export default DisplayLanguage