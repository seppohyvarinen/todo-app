import { DropdownButton, Dropdown } from "react-bootstrap";

/*
The Filter.js contains the component Filter that uses upper level functions to handle the filtering
and sorting of the list.
It receives the todos and the functions for this as props.
It returns 2 Dropdown Button elements. The first contains all the tags the user can filter by and the other
contains the option "Last edited" which the user can click to sort the todos by last edited.
*/

const Filter = ({ todos, filter, sort, theme }) => {
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
        id={theme === "alt" ? "altbutton" : "dropdown-basic-button"}
        title="Filter By"
        style={{
          display: "inline-block",
          marginRight: "5px",
        }}
      >
        {filters}
      </DropdownButton>
      <DropdownButton
        id={theme === "alt" ? "altbutton" : "dropdown-basic-button"}
        title="Order By"
        style={{
          display: "inline-block",
        }}
      >
        {orderBy}
      </DropdownButton>
    </span>
  );
};

export default Filter;
