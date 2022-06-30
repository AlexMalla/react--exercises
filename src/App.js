import "./App.css";
import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom"
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser"

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Welcome name={'Alex'} />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/githubuser"  >
        <Route path=":username" element={<ShowGithubUser />} />
      </Route>
    </Routes>
  </div>;
}

export default App;
