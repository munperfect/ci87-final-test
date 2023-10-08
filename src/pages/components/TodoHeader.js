import { useState } from "react";

export default function TodoHeader({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!todo) return;

    const newTodo = {
      id: Date.now(),
      todo,
      isCompleted: false,
    };
    console.log(newTodo);
    onAddTodo(newTodo);

    setTodo("");
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add details"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn-add" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
