import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      lightOn: false
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { lightOn: !prevState.lightOn }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.lightOn ? 'on' : 'off'}</p>
        <button onClick={this.handleClick}>Switch</button>
      </div>
    );
  }
}

export default App;
