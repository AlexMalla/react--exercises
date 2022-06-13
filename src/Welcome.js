import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome {this.props.name}</p>
        <p> {this.props.age > 18 && <Age age={this.props.age} />}</p>
      </div>
    );
  }
}

export default Welcome;
