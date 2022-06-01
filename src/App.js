import "./App.css";

// Exercise 01

let hello = <h1>Hello, World!</h1>;

//Exercise 02
function Name(param) {
  return <h1> Hello, {param}</h1>;
}

function App() {
  return <div className="App">{Name("Sara")}</div>;
}

export default App;
