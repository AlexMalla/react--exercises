import "./App.css";
import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom"

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Welcome name={'Alex'} />} />
    </Routes>
  </div>;
}

export default App;
