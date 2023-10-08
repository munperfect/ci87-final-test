import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export default function All({ onAddTodo, todos, onComplete }) {
  return (
    <div>
      <TodoHeader onAddTodo={onAddTodo} />
      <TodoList todos={todos} onComplete={onComplete} />
    </div>
  );
}
