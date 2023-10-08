import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import All from "./pages/All";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import Navigation from "./pages/components/Navigation";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "🧑‍💻 Do coding challenges", isCompleted: false },
    { id: 2, todo: "💻 Complete CI final exam", isCompleted: false },
    { id: 3, todo: "💽 Learn more React", isCompleted: false },
  ]);

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleComplete(id) {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function handleDelete(id) {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  }

  function handleDeleteAll() {
    setTodos([]);
  }

  return (
    <div className="App">
      <h1>#todo</h1>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <All
              todos={todos}
              onAddTodo={handleAddTodo}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/active"
          element={
            <Active
              todos={todos}
              onAddTodo={handleAddTodo}
              onComplete={handleComplete}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <Completed
              todos={todos}
              onAddTodo={handleAddTodo}
              onComplete={handleComplete}
              onDelete={handleDelete}
              onDeleteAll={handleDeleteAll}
            />
          }
        />
      </Routes>
    </div>
  );
}
