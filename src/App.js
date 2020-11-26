import React, { Component } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ["my todo list 1", "my todo list 2", "my todo list 3"],
      term: ""
    };
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
  }
  onSubmitHandle(e) {
    e.preventDefault();
    //console.log(e.target.value);
    if (this.state.term === "") return;
    this.setState({ tasks: [...this.state.tasks, this.state.term] });
    this.setState({ term: "" });
    //this.state.
    // const {value} = e.target.value
    //this.setState({})
  }
  onDelete = (index) => {
    // event.preventDefault();
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };
  handleOnchange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="wrapper border mt-3 ">
        <div className="card frame">
          <Header tasks={this.state.tasks} />
          <Todo tasks={this.state.tasks} onDelete={this.onDelete} />
          <AddTodo
            onSubmitHandle={this.onSubmitHandle}
            handleOnchange={this.handleOnchange}
            term={this.state.term}
          />
        </div>
      </div>
    );
  }
}

export default App;
