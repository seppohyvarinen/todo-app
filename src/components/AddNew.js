import React from "react";

import AddModal from "./AddModal";

/* Addnew.js contains the component AddNew which uses the addTodo function received as props to add a new Todo.
It has a function called handleSubmit that launches other functions
that it received as props and also validates the user input so that tag is always with first letter as uppercase
and that the "name" and "tag" fields can't be empty.

It returns the "AddModal" component when the add-button is pressed.
*/

const AddNew = ({
  addTodo,
  AddState,
  Addtag,
  AddDesc,
  handleChange,
  handleTag,
  handleDesc,
  setModal,
  state,
  tag,
  desc,
  modal,
  theme,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (tag !== "" && state !== "") {
      var upperCaseTag = tag[0].toUpperCase() + tag.slice(1);

      addTodo({ name: state, tag: upperCaseTag, description: desc });
      AddState("");
      Addtag("");
      AddDesc("");
      setModal(false);
    } else {
      alert("Please fill both name and tag fields");
    }
  };
  return (
    <div>
      {" "}
      <button
        className={theme === "alt" ? "alt-add-button" : "addbutton"}
        style={{
          background:
            theme === "alt" ? "linear-gradient(#fae06e, #976b39)" : null,
          borderRadius: theme === "alt" ? "0px" : null,
        }}
        onClick={() => setModal(true)}
      >
        Add New
      </button>
      {modal && (
        <AddModal
          hC={handleChange}
          hT={handleTag}
          hD={handleDesc}
          hS={handleSubmit}
          state={state}
          tag={tag}
          desc={desc}
          close={setModal}
          mode="add"
          theme={theme}
        />
      )}
    </div>
  );
};

export default AddNew;
