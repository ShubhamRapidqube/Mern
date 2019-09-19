import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar';
import About from './Components/About';

import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  // Mark Todo Complete
  titleDone = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo._id === id){
          //todo.completed = !todo.completed;

          let data={
            _id: id,
            completed: !todo.completed
          }

          axios.put('http://localhost:4000/updateTodos',data).then(res => {
            this.componentDidMount();
          })
        }
        return todo;
      })
    });
  }

  // Delete Todo
  deleteTodo = (id) => {

    axios.delete(`http://localhost:4000/deleteTodos/${id}`).then(res => {
      this.componentDidMount();
    })

    // this.setState({
    //   todos: this.state.todos.filter(todo => todo.id !== id)
    // });
  }

  // Add Todo
  addTodo = (todo) => {
    let newTodo = {
      // id: (+ new Date()),
      title: todo,
      completed: false
    }

    axios.post('http://localhost:4000/addTodos',newTodo).then(res => {
        this.componentDidMount();
    })
    // this.setState({
    //   todos: [...this.state.todos, newTodo] 
    // })
      
    
  } 

  componentDidMount(){
    axios.get('http://localhost:4000/getTodos').then(res => {
      console.log(res.data)
      this.setState({
        todos: res.data
      })
    })
  }

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          
          <Navbar />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <TodoList todos={this.state.todos} titleDone={this.titleDone} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />
          

        </div>
      </Router>
    )
  }
}

export default App
