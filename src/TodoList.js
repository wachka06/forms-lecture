import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return(
      <ul>
        {this.props.todoList.map(el => <li>{el}</li>)}
      </ul>
    )
  }
}
export default TodoList