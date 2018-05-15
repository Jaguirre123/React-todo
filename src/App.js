import React, {Component} from 'react';
import AddTodo from './Components/AddTodo';
import TodoItem from './Components/TodoItem';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            id: 1,
            todoItems: [{id: 0, description: "be excellent", status: 'in-progress'}]
        }
    }

    addItem = (item) => {
        this.setState({
            todo: "",
            todoItems:[{description: this.state.todo, status: 'in-progress', id: this.state.id}, ...this.state.todoItems],
            id: this.state.id+1
        })
    }

    updateTodo = (evt) => {
        this.setState({
            todo: evt.target.value
        })
    }

    updateStatus = (id) => {
        let updateTodoIndex = this.state.todoItems.findIndex(function(todo) {
            return todo.id === id;
        })
        let todoItemsClone = [...this.state.todoItems];
        todoItemsClone[updateTodoIndex].status = 'complete';
        this.setState({
            todoItems: todoItemsClone
        })
    }

    render() {
        return(
            <center>
                <h1>toDo list:</h1>
                <AddTodo todo={this.state.todo} addItem={this.addItem} updateTodo={this.updateTodo} />
                {this.state.todoItems.map((todo, index) => <TodoItem todo={todo} updateStatus={this.updateStatus} key={index} />)}
            </center>
        )
    }
}

export default App;