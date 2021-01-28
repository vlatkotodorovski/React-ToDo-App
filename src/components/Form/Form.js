import React from "react";
import "./Form.css";

const Form = ({ input, setInput, todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          autoFocus
          required
          type="text"
          placeholder="Please Add TODO"
          name="text"
          onChange={handleChange}
          value={input}
        />
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
};

export default Form;
