import React from "react";
import Welcome from "./Welcome";

const StrongLuigi = <strong>Luigi</strong>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Alex" age="22" />
        <Welcome name={StrongLuigi} age="18" />
      </div>
    );
  }
}

export default App;
