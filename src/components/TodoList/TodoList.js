import React from "react";
import ToDo from "../ToDo/ToDo";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      <h1>List of Todos</h1>
      <ul className="ul-list">
        {todos.map((todo) => {
          return todo.completed === false ? (
            <ToDo
              text={todo.text}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
