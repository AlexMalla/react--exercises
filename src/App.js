import "./App.css";
import { store } from "./Store";
import { counterIncrement, counterDecrement, counterReset } from "./CounterReducer";
import { editTodo, removeTodo, addTodo } from "./todosReducer";

//already done
store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(counterIncrement())
store.dispatch(counterIncrement())
store.dispatch(counterDecrement())
store.dispatch(counterIncrement())
store.dispatch(counterReset())
store.dispatch(counterIncrement())

store.dispatch(addTodo({ id: 1, title: "Fai la spesa", completed: false }))
store.dispatch(addTodo({ id: 2, title: "Fai i compiti", completed: false }))
store.dispatch(removeTodo(2))
store.dispatch(editTodo(1, { completed: true }))



function App() {
  return <div className="App"></div>;
}

export default App;
