import React, { useEffect, useRef, useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { Draggable } from "react-beautiful-dnd";

const SingleTodo = ({ todo, todos, setTodos, index }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (e, id) => {
    e.preventDefault();
    if (editText) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: editText } : todo,
        ),
      );
      setEditMode(false);
    } else {
      alert("Please enter a value");
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <li
          className="list-item"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {editMode ? (
            <form onSubmit={(e) => editTodo(e, todo.id)}>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                ref={inputRef}
              />
            </form>
          ) : todo.isCompleted ? (
            <s>{todo.todo}</s>
          ) : (
            <span>{todo.todo}</span>
          )}
          <span className="icons">
            <i
              onClick={() => {
                if (!editMode && !todo.isCompleted) {
                  setEditMode(!editMode);
                }
              }}
            >
              <MdModeEditOutline />
            </i>
            <i onClick={() => deleteTodo(todo.id)}>
              <MdDelete />
            </i>
            <i onClick={() => completeTodo(todo.id)}>
              <IoMdCheckmark />
            </i>
          </span>
        </li>
      )}
    </Draggable>
  );
};

export default SingleTodo;
