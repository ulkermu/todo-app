import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = () => {
  const { content, dispatch } = useContext(TodoContext);

  return (
    <div className="Todo">
      {content.map((content, id) => (
        <div className="TodoChildren" key={id}>
          {content.todoContent}
          <button
            onClick={() => dispatch({ type: "remove_content", id: content.id })}
            className="TodoDelete"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
