import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const TodoAdd = () => {
  const { dispatch } = useContext(TodoContext);

  const [newContent, setNewContent] = useState({
    todoContent: "",
  });

  const { todoContent } = newContent;

  const inputHandler = (e) => {
    setNewContent({ ...newContent, todoContent: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_content",
      content: {
        todoContent,
      },
    });
  };

  return (
    <form className="TodoAdd" onSubmit={submitHandler}>
      <input
        type="text"
        name="todoadd"
        placeholder="Add Todo"
        autoComplete="off"
        onChange={inputHandler}
      />
      <button>Add</button>
      <button>Remove</button>
    </form>
  );
};

export default TodoAdd;
