import React from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Todos = ({ todos, deleteTodo, setTodos, setFltodos, edit, initEdit }) => {
  const todoList = todos.length ? (
    todos.map((todo, index) => {
      return (
        <Draggable key={todo.id} draggableId={todo.dragId} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <span className="todo" onClick={() => console.log(todo)}>
                {todo.name}

                <button
                  title="Delete this task from the list"
                  className="deletebtn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  {" "}
                  X{" "}
                </button>
                <button
                  title="Edit this task"
                  className="deletebtn"
                  id="edit"
                  onClick={() => initEdit(todo)}
                >
                  {" "}
                  <i className="fa fa-pencil"></i>{" "}
                </button>
              </span>
              <span>
                <input type="checkbox" />
              </span>
            </div>
          )}
        </Draggable>
      );
    })
  ) : (
    <p className="emptylist">Nothing to do, what a luxury!</p>
  );

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const files = reorder(todos, result.source.index, result.destination.index);

    setFltodos(files);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoList}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Todos;
