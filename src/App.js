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
  const [theme, setTheme] = useState("default");

  const addTodo = (todo) => {
    i++;
    todo.id = i;
    todo.dragId = i.toString();
    todo.done = false;
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

  const sortByDate = () => {
    var temp = [...fltodos];
    temp.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(fltodos);
    setFltodos(temp);
    console.log(fltodos);
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

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
    console.log(theme);
  };

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{ backgroundColor: theme === "alt" ? "#CAF6DC" : null }}
      >
        <Navi theme={theme} />
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
                  sort={sortByDate}
                  theme={theme}
                />
              }
            />
            <Route path="/about" exact element={<About />} />
            <Route
              path="/settings"
              exact
              element={<Settings setTheme={handleTheme} />}
            />
            <Route path="*" exact element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
