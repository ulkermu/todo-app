import "../style/App.css";
import TodoList from "./TodoList";
import { TodoContextProvider } from "../context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
