import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: ['Study', 'Eat', 'Catch mons', 'Plank'],
      todoInput: ''
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(prevState => {

      return { 
        todoList: [...prevState.todoList, this.state.todoInput],
        todoInput: ''
       }
    })
  }

  handleInput = (event) => {
    this.setState({ todoInput: event.target.value })
  }

  render() {
    return (
      <div>
        <TodoForm
          todoInput={this.state.todoInput}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput} />
          
        <TodoList todoList={this.state.todoList} />
      </div>
    )
  }
}

export default App;
