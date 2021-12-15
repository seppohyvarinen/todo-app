/* AddModal.js has the component AddModal, which creates the modal used for adding and editing the todos.
Depending on the "mode" prop it returns a little bit different texts and also has different functionality.
It receives the states that store the input data and the functions that handle adding/editing the data
as props.
*/

const AddModal = ({
  hC,
  hS,
  hT,
  hD,
  state,
  close,
  tag,
  desc,
  mode,
  date,
  theme,
}) => {
  var info = "";

  var submitText = "";
  if (mode === "add") {
    info = "Please fill all the fields and press add-button";
    submitText = "Add";
  } else {
    info = "Last edited:";
    submitText = "Save";
  }
  return (
    <div className="modalBG">
      <div
        className="theModal"
        style={{
          backgroundColor: theme === "alt" ? "rgb(255, 232, 189)" : null,
        }}
      >
        <div className="closeModal">
          <button onClick={() => close(false)}> X </button>
        </div>

        <div className={theme === "alt" ? "alt-input-form" : "inputForm"}>
          <form onSubmit={hS}>
            <label id={theme === "alt" ? "alt-inputHeader" : "inputHeader"}>
              {info}
              {mode !== "add" && new Date(date).toLocaleString()}
            </label>

            <div className={theme === "alt" ? "alt-inputfield" : "inputfield"}>
              <h4>Name of the task (max 20 characters)</h4>
              <input type="text" onChange={hC} value={state} maxLength="20" />
            </div>
            <div className={theme === "alt" ? "alt-tagfield" : "tagfield"}>
              <h4>Tag of the task</h4>
              <input type="text" onChange={hT} value={tag} />
            </div>
            <div
              className={
                theme === "alt" ? "alt-descriptionfield" : "descriptionfield"
              }
            >
              <h4>Description</h4>
              <textarea
                rows="5"
                cols="50"
                name="description"
                onChange={hD}
                value={desc}
              ></textarea>
            </div>
            <button
              type="submit"
              className={theme === "alt" ? "alt-submitTodo" : "submitTodo"}
            >
              {submitText}
            </button>
            <button
              className={theme === "alt" ? "alt-cancelTodo" : "cancelTodo"}
              onClick={() => close(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
