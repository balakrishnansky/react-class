import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Balakrishnan Ramalingam",
      age: "40",
      country: "USA"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
        <h3>{this.state.country}</h3>
      </div>
    );
  }
}

export default App;
