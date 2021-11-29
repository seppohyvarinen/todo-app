import { useState } from "react";
const AddModal = ({ hC, hS, state, close }) => {
  return (
    <div className="modalBG">
      <div className="theModal">
        <div className="closeModal">
          <button onClick={() => close(false)}> X </button>
        </div>

        <div className="inputForm">
          <form onSubmit={hS}>
            <label>Add new</label>

            <div className="inputfield">
              <input type="text" onChange={hC} value={state} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
