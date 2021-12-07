import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import About from "./components/About";
import Navi from "./components/Navi";
import Notfound from "./components/Notfound";

let i = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [fltodos, setFltodos] = useState(todos);

  const addTodo = (todo) => {
    i++;
    todo.id = i;
    todo.dragId = i.toString();
    todo.date = new Date();
    console.log(todo.date);

    setTodos(todos.concat(todo));
    setFltodos(fltodos.concat(todo));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    const newFlTodos = fltodos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    setFltodos(newFlTodos);
  };

  const filterTodos = (byThis, mode) => {
    if (byThis === "all") {
      setFltodos(todos);
    } else if (mode === "tagmode") {
      const filtered = todos.filter((todo) => {
        return todo.tag === byThis;
      });
      setFltodos(filtered);
    } else {
      const filtered = todos.filter((todo) => {
        return todo.name.includes(byThis);
      });
      setFltodos(filtered);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navi />
        <div className="Content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  todos={todos}
                  fltodos={fltodos}
                  setTodos={setTodos}
                  setFltodos={setFltodos}
                  addTodo={addTodo}
                  deleteTodo={deleteTodo}
                  filter={filterTodos}
                />
              }
            />
            <Route path="/about" exact element={<About />} />
            <Route path="/settings" exact element={<Settings />} />
            <Route path="*" exact element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
