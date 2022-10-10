import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "Code JAVA", isCompleted: false },
    { id: 2, todo: "Learn React Native", isCompleted: false },
  ]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime(),
          todo: input,
          isCompleted: false,
        },
      ]);
      console.log("todo added", input, todos);
      setInput("");
    } else {
      alert("please enter a todo");
    }
  };

  return (
    <div className="App">
      <header>RemindME</header>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList
        input={input}
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
}

export default App;
