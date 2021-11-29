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

  const addTodo = (todo) => {
    i++;
    todo.id = i;
    todo.dragId = i.toString();
    console.log(i);
    setTodos(todos.concat(todo));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
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
                  setTodos={setTodos}
                  addTodo={addTodo}
                  deleteTodo={deleteTodo}
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
