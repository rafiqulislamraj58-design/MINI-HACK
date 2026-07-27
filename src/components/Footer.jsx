import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector((state) => state.todo.todos);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <footer className="mt-10">
      <div className="bg-slate-800 rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-400">{totalTasks}</h2>

          <p className="text-gray-300">Total Tasks</p>
        </div>
        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold text-green-400">
            {completedTasks}
          </h2>

          <p className="text-gray-300">Completed</p>
        </div>
        <div className="bg-slate-700 rounded-lg p-4 text-center">
          <h2 className="text-3xl font-bold text-red-400">{pendingTasks}</h2>

          <p className="text-gray-300">Pending</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
