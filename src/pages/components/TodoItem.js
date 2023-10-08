export default function TodoItem({ item, onComplete, onDelete }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => onComplete(item.id)}
      ></input>

      <label style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
        {item.todo}
      </label>

      {item.isCompleted ? (
        <button onClick={() => onDelete(item.id)} className="delete">
          ❌
        </button>
      ) : (
        ""
      )}
    </li>
  );
}
