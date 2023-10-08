import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export default function Active({ onAddTodo, todos, onComplete }) {
  return (
    <div>
      <TodoHeader onAddTodo={onAddTodo} />
      <TodoList
        todos={todos.slice().filter((item) => !item.isCompleted)}
        onComplete={onComplete}
      />
    </div>
  );
}
