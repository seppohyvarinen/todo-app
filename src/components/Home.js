import AddNew from "./AddNew";
import Todos from "./Todos";

const Home = ({ todos, addTodo }) => {
  return (
    <div>
      <AddNew addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
