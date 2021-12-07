import { DropdownButton, Dropdown } from "react-bootstrap";

const Filter = ({ todos, filter }) => {
  var list = [];
  var values = [];
  var key = 0;

  list = todos.map((todo) => {
    if (!values.includes(todo.tag)) {
      values.push(todo.tag);
      return (
        <Dropdown.Item
          onClick={() => filter(todo.tag, "tagmode")}
          value={todo.tag}
          key={++key}
        >
          {todo.tag}
        </Dropdown.Item>
      );
    }
    return null;
  });
  list.push(
    <Dropdown.Item onClick={() => filter("all")} key={++key}>
      Show All
    </Dropdown.Item>
  );

  return (
    <DropdownButton id="dropdown-basic-button" title="Filter By Tags">
      {list}
    </DropdownButton>
  );
};

export default Filter;
