import CheckMark from "../img/checkbox.png";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/* Todos.js contains the component Todos that returns the todos as draggable JSX elements. It receives the todos and
the functions for deleting and initializing editing as props. For making the elements draggable, I used
react-beautiful-dnd library to achieve this
*/

const Todos = ({
  todos,
  deleteTodo,
  setTodos,
  setFltodos,

  initEdit,
  handleDone,
  theme,
}) => {
  const handleCheckbox = (todo) => {
    handleDone(todo);
  };
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
              <span
                style={{
                  textDecorationLine: todo.done ? "line-through" : "none",
                  backgroundColor: theme === "alt" ? "#AF7272" : null,
                  border: theme === "alt" ? "#894C4C 2px solid" : null,
                  borderRadius: theme === "alt" ? "0px" : null,
                }}
                className={theme === "alt" ? "alt-todo" : "todo"}
              >
                <span
                  className={theme === "alt" ? "alt-todo-text" : null}
                  style={{ fontSize: "large" }}
                >
                  {todo.name}
                </span>
                <p className="deleteText">Delete</p>
                <button
                  title="Delete this task from the list"
                  className="deletebtn"
                  onClick={() => {
                    window.confirm(`Delete the todo ${todo.name} ? `) &&
                      deleteTodo(todo.id);
                  }}
                >
                  {" "}
                  X{" "}
                </button>
                <p className="editText">Edit</p>
                <button
                  title="Edit this task"
                  className="deletebtn"
                  id="edit"
                  onClick={() => initEdit(todo)}
                >
                  {" "}
                  <i className="fa fa-pencil"></i>{" "}
                </button>
                <p className="doneText">Done?</p>
                <input
                  type="checkbox"
                  checked={todo.done ? true : false}
                  title="Mark as done"
                  className="MarkAsDoneBox"
                  onClick={() => handleCheckbox(todo)}
                  onChange={() => {}}
                />
                <img
                  src={CheckMark}
                  style={{ display: todo.done ? "inline-block" : "none" }}
                  className={todo.done ? "checkMark" : "inActive"}
                  alt="Checkmark"
                  onClick={() => handleCheckbox(todo)}
                />
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
