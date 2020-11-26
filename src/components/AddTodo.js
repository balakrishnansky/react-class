import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form className="container my-3" onSubmit={this.props.onSubmitHandle}>
        <input
          type="text"
          name="term"
          className="input mt-3 pt-3"
          value={this.props.term}
          onChange={this.props.handleOnchange}
        />
        <button className="buttom">Submit </button>
      </form>
    );
  }
}

export default AddTodo;
