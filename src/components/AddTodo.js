import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitHandle}>
        <input
          type="text"
          name="term"
          className="input"
          value={this.props.term}
          onChange={this.props.handleOnchange}
        />
        <button className="buttom">Submit </button>
      </form>
    );
  }
}

export default AddTodo;
