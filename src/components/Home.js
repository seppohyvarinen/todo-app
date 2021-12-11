import AddNew from "./AddNew";

import AddModal from "./AddModal";
import Todos from "./Todos";
import Filter from "./Filter";
import { useState } from "react";
import SearchBar from "./Searchbar";

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
          <Filter todos={todos} filter={filter} sort={sort} />
        )}
        {todos.length !== 0 && <SearchBar todos={todos} filter={filter} />}
        <Todos
          todos={fltodos}
          setTodos={setTodos}
          setFltodos={setFltodos}
          edit={setEdit}
          initEdit={initEdit}
          deleteTodo={deleteTodo}
          handleDone={handleDone}
        />
      </div>
    </div>
  );
};

export default Home;
