import "./App.css";
import ClickCounter from "./ClickCounter"

function App() {
  function onCounterChange(count) {
    console.log(`The counter is ${count}`)
  }
  return <div className="App">
    <ClickCounter onCounterChange={onCounterChange} />
  </div>;
}

export default App;
