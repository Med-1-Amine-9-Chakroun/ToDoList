import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item);
    setTodos(todos.filter((todoitem) => todoitem !== item));
    console.log(todos);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
