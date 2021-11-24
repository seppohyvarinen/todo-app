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
      <form onSubmit={handleSubmit}>
        <label>Add new</label>

        <div className="inputfield">
          <input type="text" onChange={handleChange} value={state} />
          <button
            style={{
              display: "inline-block",
              marginLeft: "20px",
              backgroundColor: "green",
              borderRadius: "10px",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
