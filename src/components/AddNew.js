import React from "react";
import { useState } from "react";
import AddModal from "./AddModal";

const AddNew = ({ addTodo }) => {
  const [state, AddState] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    AddState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ content: state });
    AddState("");
  };
  return (
    <div>
      {" "}
      <button className="addbutton" onClick={() => setModal(true)}>
        Add New
      </button>
      {modal && (
        <AddModal
          hC={handleChange}
          hS={handleSubmit}
          state={state}
          close={setModal}
        />
      )}
    </div>
  );
};

export default AddNew;
