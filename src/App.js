import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import About from "./components/About";
import Navi from "./components/Navi";
import Notfound from "./components/Notfound";

/* App.js file serves as the "highest" layer of this application. It stores the actual TODO-list
as well as the filtered TODO-list, called "fltodos", which is the one that is actually shown to user.
The App.js file also contains all the important methods that handle the Todos, such as adding, filtering, sorting and deleting them.
This file also contains the state of "theme", which defines the color theme used (changed in the settings of the app)

The app uses react-router to achieve the SPA-functionality and the Routes are divided to Home, Settings and About.
Home.js is the parent for most of the components that implement the actual functionality of this app.*/

let i = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [fltodos, setFltodos] = useState(todos);
  const [theme, setTheme] = useState("default");

  // Handles adding the todos. It adds to the todo it receives an id, dragId (for dragging purposes) and
  // information of whether it's done (false so far) and also a new Date() object. It then sets both the states
  // todos and filtered todos with this new todo:

  const addTodo = (todo) => {
    i++;
    todo.id = i;
    todo.dragId = i.toString();
    todo.done = false;
    todo.date = new Date();

    setTodos(todos.concat(todo));
    setFltodos(fltodos.concat(todo));
  };

  // Handles deleting the todos. It creates a new temporary array called newTodos which copies the todos
  // but filters the one with the id that is about to be deleted. It then sets the new state for the todos
  // and the filtered todos.

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

  // Handles sorting todos by date. It uses the date object that is stored in each todo (that is updated every time the todo is edited)

  const sortByDate = () => {
    var temp = [...fltodos];
    temp.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(fltodos);
    setFltodos(temp);
    console.log(fltodos);
  };

  // Handles filtering the todos. This function has different modes for filtering by "all" which is self explanatory
  // and also "tagmode" which uses the byThis variable it receives to filter the todos by certain tag.
  // The third mode is mode without name just handled with else block, it handles the filtering according to
  // the searchparameters in the search bar.

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
        return todo.name.toLowerCase().includes(byThis.toLowerCase());
      });
      setFltodos(filtered);
    }
  };

  //handles setting the theme
  const handleTheme = (newTheme) => {
    setTheme(newTheme);
    console.log(theme);
  };

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{ backgroundColor: theme === "alt" ? "#EBDBA6" : null }}
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
            <Route path="/about" exact element={<About theme={theme} />} />
            <Route
              path="/settings"
              exact
              element={<Settings setTheme={handleTheme} theme={theme} />}
            />
            <Route path="*" exact element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
