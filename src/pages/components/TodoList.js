import TodoItem from "./TodoItem";

export default function TodoList({ todos, onComplete, onDelete }) {
  return (
    <div className="list">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            item={todo}
            key={todo.id}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
