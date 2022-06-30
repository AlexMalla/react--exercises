import "./App.css";
import Welcome from "./Welcome";
import { Routes, Route, Link } from "react-router-dom"
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser"
import GithubUserList from "./GithubUserList"

const style = {
  margin: "10px",
}

function App() {
  return <div className="App">
    <div>
      <Link style={style} to="/" > Welcome</Link>
      <Link style={style} to="/counter" > Counter</Link>
      <Link style={style} to="/users" >Github user</Link>
    </div>
    <Routes>
      <Route path="/" element={<Welcome name={'Alex'} />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/users" element={<GithubUserList />}  >
        <Route path=":username" element={<ShowGithubUser />} />
      </Route>
      <Route path='*' element={<h1>This page doesn't exists.</h1>} />
    </Routes>
  </div>;
}

export default App;
