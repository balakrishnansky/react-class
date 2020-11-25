import React from "react";
import ListTodo from "./ListTodo";

const Todo = props => {
  const todoListArr = props.tasks.map((task, index) => {
    return (
      <ListTodo
        content={task}
        key={index}
        id={index}
        onDelete={props.onDelete}
      />
    );
  });
  return <div className="list-wrapper">{todoListArr}</div>;
};

export default Todo;

/*

  const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return( 
    <div className='list-wrapper'>
      {todos}
    </div>
  );
}
  
*/
