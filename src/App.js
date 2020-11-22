import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.hanldeClickEvent = this.hanldeClickEvent.bind(this);
  }
  hanldeClickEvent() {
    this.setState(prevState => {
      return {
        count: prevState.count + 3
      };
    });
  }

  render() {
    return (
      <div className="placeCenter">
        <h1>{this.state.count} </h1>
        <button onClick={this.hanldeClickEvent}>Click me</button>
      </div>
    );
  }
}

export default App;
