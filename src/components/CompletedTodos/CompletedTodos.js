import React from "react";
import ToDo from "../ToDo/ToDo";
import "./CompletedTodos.css";

const CompletedTodos = ({ todos, setTodos }) => {
  return (
    <div className="completed-list">
      <h1>List of Done Todos</h1>
      <ul className="ul-list">
        {todos.map((todo) => {
          return todo.completed === true ? (
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

export default CompletedTodos;
