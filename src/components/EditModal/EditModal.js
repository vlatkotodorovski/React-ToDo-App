import React from "react";
import "./EditModal.css";

const EditModal = ({
  handleModalClose,
  text,
  submitEditTodo,
  handleChangeTodo,
}) => {
  return (
    <div className="edit-modal-container">
      <form className="edit-modal-form">
        <label>Edit Todo</label>
        <input
          autoFocus
          required
          onChange={handleChangeTodo}
          type="text"
          name="editText"
          defaultValue={text}
        />
        <div className="edit-modal-buttons">
          <button onClick={submitEditTodo} className="button-modal save">
            SAVE
          </button>
          <button onClick={handleModalClose} className="button-modal close">
            CLOSE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
