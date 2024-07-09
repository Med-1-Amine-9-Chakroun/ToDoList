export default function TodoItem({ item }) {
  return <div>{<li key={item}>{item}</li>}</div>;
}
