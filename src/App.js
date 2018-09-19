import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggerText: 'bye'
    }
  }

  handleInput = (event) => {
    this.setState({
      loggerText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.loggerText}
          onChange={this.handleInput} 
          type="text" />
        <p>{this.state.loggerText}</p>
      </div>
    )
  }
}

export default App;
