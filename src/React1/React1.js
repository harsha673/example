import React, {Component} from 'react';

class React1 extends Component {
  state = {
    counter:0
  }
  increment = () =>{
    this.setState({
      counter : this.state.counter +1
    });
  }
  decrement = () =>{
    this.setState({
      counter : this.state.counter-1
    });
  }
  render() {
    
    return (
      <div>
        <h1>Counter Demo</h1>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Increment Counter</button>
        <button onClick={this.decrement}>Decrement Counter</button>
      </div>
    );
  }
}

export default React1;