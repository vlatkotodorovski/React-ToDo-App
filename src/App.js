import React, { useState } from "react";
import "./App.css";
import CompletedTodos from "./components/CompletedTodos/CompletedTodos";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="lists">
        <TodoList todos={todos} setTodos={setTodos} />
        <CompletedTodos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
