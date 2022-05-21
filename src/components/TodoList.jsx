import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <TodoAdd />
      <Todo />
    </div>
  );
};

export default TodoList;
