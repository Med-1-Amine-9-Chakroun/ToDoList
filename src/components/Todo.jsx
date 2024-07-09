import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
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
    </div>
  );
}
