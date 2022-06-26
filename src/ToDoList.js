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
        })

        this.state.todos.push(value)
        event.target.elements.taskInput.value = ""
    }
    Reset = () => {
        this.setState({
            todos: []
        })
    }

    RemoveItem = (todo) => {
        this.setState((state) => {
            const array = state.todos.filter((item) => { return item !== todo })
            return { todos: array }
        })
    }

    render() {
        return (
            <div onClick={this.RemoveItem}>
                {this.props.render(this.state.todos)}
                <form onSubmit={this.AddTask}>
                    <input name="taskInput" />
                    <button>Add Task</button>
                </form>
                <button onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}
export default TodoList