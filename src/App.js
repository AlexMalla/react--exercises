import "./App.css";
import Counter from "./Counter"
import { useState } from "react"

function App() {

  const [toggle, setToggle] = useState(true)



  function onCounterChange(count) {
    console.log(`The counter is ${count}`)
  }

  function handleButton() {
    setToggle(s => !s)
  }

  return <div className="App">
    {toggle && <Counter onCounterChange={onCounterChange} />}
    <button onClick={handleButton} >Unmount</button>

  </div>;
}

export default App;
