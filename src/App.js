import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import About from "./components/About";
import Navi from "./components/Navi";
import Notfound from "./components/Notfound";

function App() {
  let i = 0;
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    todo.id = ++i;
    setTodos(todos.concat(todo));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navi />
        <div className="Content">
          <Routes>
            <Route
              path="/"
              element={<Home todos={todos} addTodo={addTodo} />}
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
