import React, { Component } from 'react'

class TodoForm extends Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <label>
          New Todo:
            <input
              onChange={this.props.handleInput}
              value={this.props.todoInput}
            type="text" name="todo" />
        </label>
        <input type="submit" />
      </form>
    )
  }
}

export default TodoForm