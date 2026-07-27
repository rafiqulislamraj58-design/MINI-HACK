import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (!newText.trim()) return;

    dispatch(
      editTodo({
        id: todo.id,
        text: newText,
      }),
    );

    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow rounded-xl p-4 mb-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />

        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        ) : (
          <h2
            className={`${todo.completed ? "line-through text-gray-400" : ""}`}
          >
            {todo.text}
          </h2>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
