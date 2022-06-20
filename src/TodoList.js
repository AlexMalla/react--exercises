import React from "react";
export class TodoList extends React.Component {
    state = {
        todos: [
        "Buy eggs",
        "Study React with Gianmarco",
        "Play FIFA",
        "Sleep",
        ]
    }

    AddTask = (event) => {
        event.preventDefault()

        const value = event.target.elements.taskInput.value
        this.setState({
            item: value
        })

        this.state.todos.push(value)
        event.target.elements.taskInput.value = ""
    }

    Reset = () => {
        this.setState({
            todos: []
        })
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.todos.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={this.AddTask}>
                    <input name="taskInput"/>
                    <button>Add Task</button>
                </form>
                <button onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}

export default TodoList