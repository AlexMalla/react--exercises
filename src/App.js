import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Alex" age="22" />
      </div>
    );
  }
}

export default App;
