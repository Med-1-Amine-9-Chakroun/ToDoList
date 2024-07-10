import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

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
  );
}
