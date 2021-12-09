import { DropdownButton, Dropdown } from "react-bootstrap";

const Filter = ({ todos, filter, sort }) => {
  var filters = [];
  var orderBy = [];
  var values = [];
  var key = 0;

  filters = todos.map((todo) => {
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
  filters.push(
    <Dropdown.Item onClick={() => filter("all")} key={++key}>
      Show All
    </Dropdown.Item>
  );
  orderBy.push(
    <Dropdown.Item onClick={() => sort()} key={++key}>
      Last edited
    </Dropdown.Item>
  );

  return (
    <span>
      <DropdownButton
        id="dropdown-basic-button"
        title="Filter By"
        style={{ display: "inline-block", marginRight: "5px" }}
      >
        {filters}
      </DropdownButton>
      <DropdownButton
        id="dropdown-basic-button"
        title="Order By"
        style={{ display: "inline-block" }}
      >
        {orderBy}
      </DropdownButton>
    </span>
  );
};

export default Filter;
