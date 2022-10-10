import React, { useRef } from "react";
import "../App.css";

const Form = ({ input, setInput, addTodo }) => {
  const inputRef = useRef(null);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        addTodo(e);
        inputRef.current.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="go">
        GO
      </button>
    </form>
  );
};

export default Form;
