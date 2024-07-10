import { useState } from "react";
import styles from "./form.module.css";
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
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          placeholder="Enter Todo intem..."
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernButton} type="submit" onClick={addTodo}>
          Add
        </button>
      </div>
    </form>
  );
}
