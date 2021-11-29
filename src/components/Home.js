import AddNew from "./AddNew";
import Todos from "./Todos";

const Home = ({ todos, addTodo, deleteTodo, setTodos }) => {
  return (
    <div>
      <AddNew addTodo={addTodo} />
      <Todos todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
