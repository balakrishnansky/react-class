import React from "react";

const AddTodo = props => {
  return (
    <form onSubmit={props.onSubmitHandle}>
      <input
        type="text"
        name="term"
        value={props.term}
        onChange={props.handleOnchange}
      />
      <button>Submit </button>
    </form>
  );
};

export default AddTodo;
