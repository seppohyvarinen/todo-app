import React from "react";
import { useState } from "react";

const AddNew = ({ addTodo }) => {
  const [state, AddState] = useState("");

  const handleChange = (e) => {
    AddState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ content: state });
    AddState("");
  };
  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Add new</label>
        <input type="text" value={state} />
      </form>
    </div>
  );
};

export default AddNew;
