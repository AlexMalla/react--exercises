import "./App.css";
import { store } from "./Store";
import { counterIncrement } from "./CounterReducer";

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(counterIncrement())


function App() {
  return <div className="App"></div>;
}

export default App;
