import "../App.css";
import SingleTodo from "./SingleTodo";

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <section className="list-items">
      <ul>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
