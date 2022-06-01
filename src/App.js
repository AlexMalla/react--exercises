import "./App.css";

// Exercise 01

let hello = <h1>Hello, World!</h1>;

//Exercise 02
/*
function Name(param) {
  return <h1> Hello, {param}</h1>;
}

function App() {
  return <div className="App">{Name("Sara")}</div>;
}
*/
//Exercise 05

function Sum(a, b) {
  return <h2> {a + b} </h2>;
}

function App() {
  return <h2 className="App"> {Sum(9, 8)} </h2>;
}

export default App;
