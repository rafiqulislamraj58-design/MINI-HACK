
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar/>
      <div className="max-w-3xl mx-auto p-6">
        <TodoForm/>
        <TodoList/>
      </div>
     <Footer/>
    </div>
  );
}

export default App;