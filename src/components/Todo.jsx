import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = () => {
  const {content} = useContext(TodoContext);
  return (
    <div className="Todo">
      {content.map((content, id) => (
        <div className="TodoChildren" key={id}>{content.todoContent}</div>
      ))}
    </div>
  );
};

export default Todo;
