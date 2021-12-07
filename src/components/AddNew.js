import React from "react";

import AddModal from "./AddModal";

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
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ name: state, tag: tag, description: desc });
    AddState("");
    Addtag("");
    AddDesc("");
    setModal(false);
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
          hT={handleTag}
          hD={handleDesc}
          hS={handleSubmit}
          state={state}
          tag={tag}
          desc={desc}
          close={setModal}
          mode="add"
        />
      )}
    </div>
  );
};

export default AddNew;
