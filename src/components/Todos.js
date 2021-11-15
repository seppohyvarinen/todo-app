import React from "react";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id}>
          <span className="todo">{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p>no</p>
  );
  return <div className="todos">{todoList}</div>;
};

export default Todos;
