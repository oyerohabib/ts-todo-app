import "../App.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="list-group">
      <Droppable droppableId="uncompleted-todo">
        {(provided) => (
          <section
            className="list-items uncompleted"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <header>Uncompleted Todos</header>
            <ul>
              {todos.map((todo, index) => (
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </ul>
          </section>
        )}
      </Droppable>
      <Droppable droppableId="completed-todo">
        {(provided) => (
          <section
            className="list-items completed"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <header>Completed Todos</header>
            <ul>
              {completedTodos.map((todo, index) => (
                <SingleTodo
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                  key={todo.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </ul>
          </section>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
