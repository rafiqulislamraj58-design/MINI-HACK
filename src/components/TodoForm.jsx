import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-5 flex gap-3"
      >
        <input
          type="text"
          placeholder="Enter your task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-semibold transition"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;