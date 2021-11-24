import AddNew from "./AddNew";
import Todos from "./Todos";

const Home = ({ todos, addTodo, deleteTodo }) => {
  return (
    <div>
      <AddNew addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
