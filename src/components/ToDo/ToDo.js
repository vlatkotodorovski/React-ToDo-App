import React, { useState } from "react";
import "./Todo.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { AiFillCheckSquare } from "react-icons/ai";
import EditModal from "../EditModal/EditModal";

const ToDo = ({ text, todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };

  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const editTodo = () => {
    handleModalOpen();
  };

  const [modal, setModal] = useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const [editText, setEditText] = useState("");

  const submitEditTodo = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: editText,
          };
        }
        return item;
      })
    );
    handleModalClose();
  };

  const handleChangeTodo = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="buttons-group">
        <button onClick={deleteTodo} className="button-todo btn-delete">
          <p>Delete</p>
          <FaTrashAlt size="20px" />
        </button>
        <button onClick={completeTodo} className="button-todo btn-done">
          <p>{todo.completed ? "UnDone" : "Done"}</p>
          <AiFillCheckSquare size="20px" />
        </button>
        <button onClick={editTodo} className="button-todo btn-edit">
          <p>Edit</p>
          <FaEdit size="20px" />
        </button>
      </div>
      {modal ? (
        <EditModal
          modal={modal}
          handleModalClose={handleModalClose}
          todos={todos}
          text={text}
          setTodos={setTodos}
          submitEditTodo={submitEditTodo}
          handleChangeTodo={handleChangeTodo}
        />
      ) : null}
    </div>
  );
};

export default ToDo;
