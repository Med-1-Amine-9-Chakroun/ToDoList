import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
    setTodo("");
  }
  function addTodo(e) {
    console.log(todo);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
      {
        <ul>
          {todos.map((item) => (
            <TodoItem item={item} />
          ))}
        </ul>
      }
    </div>
  );
}
