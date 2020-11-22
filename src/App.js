import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Balakrishnan",
      age: 55,
      loggenIn: false
    };
  }
  render() {
    return (
      <div>
        <h1>
          your are now logged {this.state.loggenIn ? "IN" : "OUT"} as{" "}
          {this.state.name}
        </h1>
      </div>
    );
  }
}

export default App;
