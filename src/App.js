import TodoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <TodoList render={(todos, RemoveItem) => {
        return <div>
          {todos.map((todo, index) => (
            <div>
              <li key={index}>{todo}</li>
              <button onClick={RemoveItem}>Remove task</button>
            </div>
          ))}

        </div>
      }}>
      </TodoList>
    </div>
  );
}

export default App;
