import "./App.css";
import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom"
import Counter from "./Counter";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Welcome name={'Alex'} />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </div>;
}

export default App;
