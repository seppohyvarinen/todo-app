const AddModal = ({ hC, hS, hT, hD, state, close, tag, desc, mode, date }) => {
  var info = "";
  var submitText = "";
  if (mode === "add") {
    info = "Please fill all the fields and press add-button";
    submitText = "Add";
  } else {
    info = "Edit the fields you want";
    submitText = "Save";
  }
  return (
    <div className="modalBG">
      <div className="theModal">
        <div className="closeModal">
          <button onClick={() => close(false)}> X </button>
        </div>

        <div className="inputForm">
          <form onSubmit={hS}>
            <label id="inputHeader">{info}</label>
            {mode !== "add" && (
              <div className="DateInfo">Last edited: {date}</div>
            )}
            <div className="inputfield">
              <h4>Name of the task</h4>
              <input type="text" onChange={hC} value={state} />
            </div>
            <div className="tagfield">
              <h4>Tag of the task</h4>
              <input type="text" onChange={hT} value={tag} />
            </div>
            <div className="descriptionfield">
              <h4>Description</h4>
              <textarea
                rows="5"
                cols="50"
                name="description"
                onChange={hD}
                value={desc}
              ></textarea>
            </div>
            <button type="submit" className="submitTodo" onClick={hS}>
              {submitText}
            </button>
            <button className="cancelTodo" onClick={() => close(false)}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
