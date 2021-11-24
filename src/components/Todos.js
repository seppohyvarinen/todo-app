import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos
      .map((todo) => {
        return (
          <div key={todo.id}>
            <span className="todo">
              {todo.content}
              <button
                className="deletebtn"
                onClick={() => deleteTodo(todo.id)}
              ></button>
            </span>
          </div>
        );
      })
      .reverse()
  ) : (
    <p className="emptylist">Nothing to do, what a luxury!</p>
  );
  return <div className="todos">{todoList}</div>;
};

export default Todos;
