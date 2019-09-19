import React, { Component } from 'react'
import Todo from './Todo';

class TodoList extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <Todo key={todo._id} todo={todo} titleDone={this.props.titleDone} deleteTodo={this.props.deleteTodo} />
        ));
    }
}

export default TodoList
