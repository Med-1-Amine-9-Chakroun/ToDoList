import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </div>
  );
}
