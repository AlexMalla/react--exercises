import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18
        ? <h1>Your age is {this.props.age}</h1>
        : <h1>You are very young!</h1>
        }
      </div>
    );
  }
}

export default Welcome;
