import AddNew from "./AddNew";

import AddModal from "./AddModal";
import Todos from "./Todos";
import Filter from "./Filter";
import { useState } from "react";
import SearchBar from "./Searchbar";

/* Home.js is the Homepage of the app but it also stores the "temporary" states needed when adding and editing Todos.
These states include "state" that serves as the name of the todo, "tag" as the tag of the todo and "desc" as the description
of the todo.
It also stores the date todo was last edited and information whether the Todo is done or not.
It takes the functions for adding and deleting
the todos (as well as the Todo array itself) as props and passes them to components that need them */

const Home = ({
  todos,
  addTodo,
  deleteTodo,
  setTodos,
  setFltodos,
  filter,
  fltodos,
  sort,
  theme,
}) => {
  const [edit, setEdit] = useState(false);
  const [state, AddState] = useState("");
  const [tag, Addtag] = useState("");
  const [desc, AddDesc] = useState("");
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(0);
  const [date, setDate] = useState(new Date().toString());
  const [done, setDone] = useState(false);

  /*
    These three handlers handle the state of name (state), tag (tag) and desc (description) that are added to every new todo (and edited todo)
  */

  const handleChange = (e) => {
    AddState(e.target.value);
  };
  const handleTag = (e) => {
    Addtag(e.target.value);
  };
  const handleDesc = (e) => {
    AddDesc(e.target.value);
  };
  const initEdit = (todo) => {
    setEdit(true);
    AddState(todo.name);
    Addtag(todo.tag);
    AddDesc(todo.description);
    setEditId(todo.id);
    setDate(todo.date.toString());
  };
  const handleClose = () => {
    setEdit(false);
    AddState("");
    Addtag("");
    AddDesc("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    var todoIndex = todos.findIndex((obj) => obj.id == editId);
    todos[todoIndex].name = state;
    todos[todoIndex].tag = tag;
    todos[todoIndex].description = desc;
    todos[todoIndex].date = new Date().toString();
    console.log(todos[todoIndex].date);
    AddState("");
    Addtag("");
    AddDesc("");
    setEdit(false);
  };

  const handleDone = (todo) => {
    console.log(todo.done);
    todo.done = !todo.done;
    console.log(todo.done);
    setDone(!done);
  };

  return (
    <div>
      {edit && (
        <AddModal
          close={handleClose}
          mode="edit"
          hC={handleChange}
          hT={handleTag}
          hD={handleDesc}
          hS={handleEdit}
          state={state}
          tag={tag}
          desc={desc}
          date={date}
          theme={theme}
        />
      )}

      <div className="List">
        <AddNew
          addTodo={addTodo}
          AddState={AddState}
          Addtag={Addtag}
          AddDesc={AddDesc}
          handleChange={handleChange}
          handleTag={handleTag}
          handleDesc={handleDesc}
          setModal={setModal}
          state={state}
          tag={tag}
          desc={desc}
          modal={modal}
          theme={theme}
        />
        {todos.length !== 0 && (
          <Filter todos={todos} filter={filter} sort={sort} theme={theme} />
        )}
        {todos.length !== 0 && (
          <SearchBar theme={theme} todos={todos} filter={filter} />
        )}
        <Todos
          todos={fltodos}
          setTodos={setTodos}
          setFltodos={setFltodos}
          edit={setEdit}
          initEdit={initEdit}
          deleteTodo={deleteTodo}
          handleDone={handleDone}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Home;
