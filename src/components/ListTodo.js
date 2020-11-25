import React from "react";

const ListTodo = props => {
  return (
    <div className="list-item">
      {props.content}
      <button
        className="delete is-pulled-right"
        onClick={() => props.onDelete(props.id)}
      >
        {"X"}
      </button>
    </div>
  );
};

export default ListTodo;
