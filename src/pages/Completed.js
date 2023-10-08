import TodoList from "./components/TodoList";

export default function Completed({
  todos,
  onComplete,
  onDelete,
  onDeleteAll,
}) {
  return (
    <div>
      <TodoList
        todos={todos.slice().filter((item) => item.isCompleted)}
        onComplete={onComplete}
        onDelete={onDelete}
      />
      <div className="delete-completed">
        <button className="btn-delete" onClick={onDeleteAll}>
          Delete all
        </button>
      </div>
    </div>
  );
}
