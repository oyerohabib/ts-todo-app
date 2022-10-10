import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

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
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    let tempTodo, tempCompleted = completedTodos, tempUncompleted = todos;
    if (source.droppableId === "uncompleted-todo") {
      tempTodo = tempUncompleted[source.index];
      tempUncompleted.splice(source.index, 1);
    } else {
      tempTodo = tempCompleted[source.index]
      tempCompleted.splice(source.index, 1)
    }
    if (destination.droppableId === "uncompleted-todo") {
      tempUncompleted.splice(destination.index, 0, tempTodo)
    } else {
      tempCompleted.splice(destination.index, 0, tempTodo);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
};

export default App;
