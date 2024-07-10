import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
