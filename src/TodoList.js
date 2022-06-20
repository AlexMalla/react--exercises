import React from "react";

export class TodoList extends React.Component {

state = {
    todos: [
        "Buy eggs",
        "Study React with Gianmarco",
        "Play FIFA",
        "Sleep"
    ]
}

InputChange = (event) => {
    this.setState({
        task: event.target.value
    })
}

AddTask = (event) => {    
    this.setState({
        task: event.target.value
    })

    this.state.todos.push(this.state.task)
}



render() {
    return <div>
        <ul>
            {this.state.todos.map((todo, index) =>(
               <li key={index}>{todo}</li>
            ))}
        </ul>

        <input name="newTask" onChange={this.InputChange} />
        <button onClick={this.AddTask}>Add task</button>
           </div>
}

}

export default TodoList